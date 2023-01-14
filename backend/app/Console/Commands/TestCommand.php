<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Symfony\Component\Console\Command\Command as CommandAlias;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:roles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public function assignRoles()
    {
        $users = User::query()->where('name', 'like', '%Justin%')->get();

        if ($users) {
            foreach ($users as $user) {
                $user->syncRoles(['admin', 'user']);
                $this->info('Assigning roles [admin] and [user] to ' . $user->name);
            }
        }
    }

    public function showRoles()
    {
        $user = User::with('roles')->find(1);
        dump($user->toArray());
    }

    public function doTranslate()
    {

    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        $this->showRoles();
        return CommandAlias::SUCCESS;
    }
}
