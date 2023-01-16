<?php

namespace App\Console\Commands;

use App\Models\Geo;
use App\Models\User;
use App\Models\Project;
use App\Models\Property;
use App\Models\PropertyType;
use App\Services\BenchmarkService;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;
use Spatie\Permission\Models\Role;
use Symfony\Component\Console\Command\Command as CommandAlias;

class DevSeeder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dev:seed';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'For development purposes only. Seeds the database and relationships as if it were live data.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        $this->truncateAll();

        $this->info('1/9 - Creating Agents & Users...');
        $this->createUsers( 10000);
        $this->info('');

        $this->info('2/9 - Creating Projects...');
        $this->createProjects(5000);
        $this->info('');

        $this->info('3/9 - Creating Properties...');
        $this->createProperties(20000);
        $this->info('');

        $this->info('4/9 - Assigning role user to all users...');
        $agents = User::query();
        $agentRole = Role::findByName('user');
        $this->assignRoleToUsers($agents, $agentRole);
        $this->info('');

        $this->info('5/9 - Assigning role agent to some users...');
        $agents = User::query()->where('id', '<=', 5000);
        $agentRole = Role::findByName('agent');
        $this->assignRoleToUsers($agents, $agentRole);

        $this->info('6/9 - Attaching agents to properties...');
        $agents = User::role('agent');
        $this->attachUserToProperties($agents, 'agent');
        $this->info('');

        $this->info('7/9 - Creating contacts...');
        $this->createUsers( 5000);
        $this->info('');

        $this->info('8/9 - Assigning role contact...');
        $contacts = User::query()->doesntHave('roles');
        $contactsRole = Role::findByName('contact');
        $this->assignRoleToUsers($contacts, $contactsRole);

        $this->info('9/9 - Attaching contacts to properties...');
        $contacts = User::role('contact');
        $this->attachUserToProperties($contacts);
        $this->info('');

        $this->info('Completed. Now go make something awesome!');

        return CommandAlias::SUCCESS;
    }

    private function truncateAll()
    {
        Property::query()->truncate();
        Project::query()->truncate();
        User::query()->truncate();
        DB::table('model_has_roles')->truncate();
        DB::table('property_user')->truncate();
    }

    private function createUsers($count = 100)
    {
        $benchmark = new BenchmarkService();
        $benchmark->start();

        $bar = $this->output->createProgressBar($count);
        $bar->start();

        $chunk = $count / 1000;

        for ($j = 1; $j <= $chunk; $j++) {
            $userData = array();
            for ($i = 1; $i <= 1000; $i++) {
                $userData[] = [
                    'name' => fake()->name(),
                    'email' => fake()->firstName().fake()->firstName().Str::random(12).'@'.fake()->safeEmailDomain(),
                    'email_verified_at' => now(),
                    'password' => null,
                    'remember_token' => Str::random(10),
                ];
            }
            User::query()->insert($userData);
            $bar->advance(1000);
        }

        $benchmark->stop();
        $bar->finish();
        $this->info('');
        $this->info("Query: {$benchmark->executionTime()}, Memory: {$benchmark->memoryUsage()} mb");
        $this->info('');
    }

    private function createProjects($count = 100)
    {
        $benchmark = new BenchmarkService();
        $benchmark->start();

        $bar = $this->output->createProgressBar($count);
        $bar->start();

        $chunk = $count / 1000;
        for ($j = 1; $j <= $chunk; $j++) {
            $projectData = array();
            for ($i = 1; $i <= 1000; $i++) {
                $projectData[] = [
                    'title' => fake()->company(),
                    'description' => fake()->sentences(2, true),
                    'latitude' => fake()->latitude(),
                    'longitude' => fake()->longitude(),
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
            Project::query()->insert($projectData);
            $bar->advance(1000);
        }

        $benchmark->stop();
        $bar->finish();
        $this->info('');
        $this->info("Runtime: {$benchmark->executionTime()}, Memory: {$benchmark->memoryUsage()} mb");
        $this->info('');
    }

    private function createProperties($count = 100) {
        $benchmark = new BenchmarkService();
        $benchmark->start();

        $bar = $this->output->createProgressBar($count);
        $bar->start();

        $areaTypes          = Property::$areaTypes;
        $propertyTypes      = PropertyType::all();
        $userCount          = User::count();
        $projectCount       = Project::count();
        $countryId          = 1605651;
        $provinces          = Geo::provinces($countryId)
                                ->limit(10)
                                ->orderBy('population', 'desc')
                                ->get();

        $chunk = $count / 1000;
        for ($j = 1; $j <= $chunk; $j++) {

            $propertyData = array();
            $districts = Geo::districts()->select(['id', 'parent_id', 'name'])
                ->where('parent_id', $provinces->random()->getKey())->get();

            for ($i = 1; $i <= 1000; $i++) {

                $propertyType   = $propertyTypes->random();
                $bedrooms       = fake()->numberBetween(0,5);
                $bathrooms      = fake()->numberBetween(0,5);
                $areaType       = $areaTypes[fake()->numberBetween(0, (count($areaTypes) - 1))];
                $areaSize       = fake()->numberBetween(32, 4000);
                $provinceId     = $provinces->random()->getKey();
                $districtId     = $districts->random()->getKey();

                $propertyData[] = [
                    'title'             => fake()->streetName(),
                    'description'       => fake()->sentences(3, true),
                    'for_sale'          => fake()->boolean(),
                    'for_rent'          => fake()->boolean(),
                    'sales_price'       => fake()->numberBetween(100000,99999999),
                    'rental_price'      => fake()->numberBetween(5000,10000),
                    'bedrooms'          => $bedrooms,
                    'bathrooms'         => $bathrooms,
                    'latitude'          => fake()->latitude(),
                    'longitude'         => fake()->longitude(),
                    'area_type'         => $areaType,
                    'area_size'         => $areaSize,
                    'plot_size'         => fake()->numberBetween(32, 4000),
                    'property_type_id'  => $propertyType->getKey(),
                    'project_id'        => fake()->unique(true)->numberBetween(1, $projectCount),
                    'country_id'        => $countryId,
                    'province_id'       => $provinceId,
                    'district_id'       => $districtId,
                    'created_by'        => fake()->unique(true)->numberBetween(1, $userCount),
                    'updated_by'        => fake()->unique(true)->numberBetween(1, $userCount),
                    'created_at'        => now(),
                    'updated_at'        => now(),
                ];
            }
            Property::query()->insert($propertyData);
            $bar->advance(1000);
        }

        $benchmark->stop();
        $bar->finish();
        $this->info('');
        $this->info("Runtime: {$benchmark->executionTime()}, Memory: {$benchmark->memoryUsage()} mb");
        $this->info('');
    }

    private function assignRoleToUsers(Builder $users, Role $role) {
        $benchmark = new BenchmarkService();
        $benchmark->start();

        $count = $users->count();

        $bar = $this->output->createProgressBar($count);
        $bar->start();

        $chunkSize = $count / 100;
        $users->chunk($chunkSize, function ($chunked) use ($role, $chunkSize, &$bar) {
            DB::table('model_has_roles')
                ->insert(
                    collect($chunked)->map(fn ($user) => [
                        'role_id' => $role->getKey(),
                        'model_type' => User::class,
                        'model_id' => $user->getKey(),
                    ])->toArray()
                );
            $bar->advance($chunkSize);
        });

        $benchmark->stop();
        $bar->finish();
        $this->info('');
        $this->info("Runtime: {$benchmark->executionTime()}, Memory: {$benchmark->memoryUsage()} mb");
        $this->info('');
    }

    private function attachUserToProperties(Builder $users, string $group = 'contact')
    {
        $benchmark = new BenchmarkService();
        $benchmark->start();

        $count = $users->count();

        $bar = $this->output->createProgressBar($count);
        $bar->start();

        $chunkSize = $count / 100;
        $users->chunk($chunkSize, function($chunk) use ($group, $chunkSize, &$bar) {
            $properties = Property::query()
                ->inRandomOrder()
                ->limit($chunkSize)
                ->get();
            DB::table('property_user')
                ->insert(
                    collect($chunk)->map(fn ($user) => [
                        'user_id' => $user->getKey(),
                        'property_id' => $properties->random()->getKey(),
                        'group' => $group
                    ])->toArray()
                );
            $bar->advance($chunkSize);
        });

        $benchmark->stop();
        $bar->finish();
        $this->info('');
        $this->info("Runtime: {$benchmark->executionTime()}, Memory: {$benchmark->memoryUsage()} mb");
        $this->info('');
    }
}
