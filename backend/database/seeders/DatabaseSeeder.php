<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Seeders\Pages\HomepageSeeder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        $this->call([
            RolesAndPermissions::class,
            PropertyTypeSeeder::class,
            HomepageSeeder::class
        ]);

        Artisan::call('geo:seed TH --append --chunk=3000');
    }
}
