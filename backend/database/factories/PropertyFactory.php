<?php

namespace Database\Factories;

use App\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Property>
 */
class PropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $areaTypes = Property::$areaTypes;
        return [
            'title' => $this->faker->company(),
            'description' => $this->faker->sentences(3, true),
            'for_sale' => $this->faker->boolean(),
            'for_rent' => $this->faker->boolean(),
            'sales_price' => $this->faker->numberBetween(100000,99999999),
            'rental_price' => $this->faker->numberBetween(5000,10000),
            'bedrooms' => $this->faker->numberBetween(0,5),
            'bathrooms' => $this->faker->numberBetween(0,5),
            'latitude' => $this->faker->latitude(),
            'longitude' => $this->faker->longitude(),
            'area_type' => $areaTypes[$this->faker->numberBetween(0, count($areaTypes))],
            'area_size' => $this->faker->numberBetween(32, 4000),
            'plot_size' => $this->faker->numberBetween(32, 4000),
        ];
    }
}
