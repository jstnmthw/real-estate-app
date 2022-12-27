<?php

namespace Database\Seeders;

use App\Models\PropertyType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PropertyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        PropertyType::query()->create([
            'name' => 'house'
        ]);
        PropertyType::query()->create([
            'name' => 'condo'
        ]);
        PropertyType::query()->create([
            'name' => 'apartment'
        ]);
        PropertyType::query()->create([
            'name' => 'townhouse'
        ]);
        PropertyType::query()->create([
            'name' => 'villa'
        ]);
        PropertyType::query()->create([
            'name' => 'land'
        ]);
    }
}
