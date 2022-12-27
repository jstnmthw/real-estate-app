<?php

namespace App\Console\Commands;

use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Console\Command;
use Symfony\Component\Console\Command\Command as CommandAlias;
use ZipArchive;

/**
 * @property Client $client
 */
class GeoDownloadAlt extends Command
{
    public const ALL_COUNTRIES = 'all';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'geo:download-alt {--countries='.self::ALL_COUNTRIES.'}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Use cUrl instead of copy to download the proper files.';

    /**
     * Construct client
     */
    public function __construct()
    {
        parent::__construct();

        $this->client = new Client();
    }

    public function getFileNames(): array
    {
        $countries = $this->option('countries');

        $files = ['hierarchy.zip', 'admin1CodesASCII.txt'];

        if ($countries == self::ALL_COUNTRIES) {
            $files = ['allCountries.zip', 'hierarchy.zip'];
        } else {
            $countries = explode(',', $countries);

            foreach ($countries as $country) {
                $files[] = "$country.zip";
            }
        }

        return $files;
    }

    /**
     * Execute the console command.
     *
     * @return int
     * @throws Exception
     * @throws GuzzleException
     */
    public function handle(): int
    {
        foreach ($this->getFileNames() as $fileName) {
            $source = "https://download.geonames.org/export/dump/$fileName";
            $target = storage_path("geo/$fileName");
            $targetTxt = storage_path('geo/' . preg_replace('/\.zip/', '.txt', $fileName));

            $this->info(" Source file {$source}" . PHP_EOL . " Target file {$targetTxt}");

            if (!(file_exists($target) || file_exists($targetTxt))) {
                $this->info(" Downloading file {$fileName}");

                if (!$this->client->request('GET', $source, ['sink' => $target])) {
                    throw new Exception("Failed to download the file $source");
                }

//                if (!copy($source, $target)) {
//                    throw new Exception("Failed to download the file $source");
//                }
            }

            if (file_exists($target) && !file_exists($targetTxt)) {
                if (preg_match('/\.zip/', $fileName)) {
                    $zip = new ZipArchive;
                    $zip->open($target);
                    $zip->extractTo(dirname($target));
                    $zip->close();
                }
            }
        }

        return CommandAlias::SUCCESS;
    }
}

