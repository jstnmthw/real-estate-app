<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->boolean('for_sale')->nullable();
            $table->boolean('for_rent')->nullable();
            $table->integer('sales_price')->nullable();
            $table->integer('rental_price')->nullable();
            $table->integer('bedrooms')->nullable();
            $table->integer('bathrooms')->nullable();
            $table->boolean('is_self_listed')->default(true);
            $table->enum('area_type', ['sqft', 'sqm', 'sqr'])->nullable();
            $table->integer('area_size')->nullable();
            $table->integer('plot_size')->nullable();
            $table->decimal('latitude', 6 ,4);
            $table->decimal('longitude', 7, 4);
            $table->foreignId('currency_id')->nullable();
            $table->foreignId('property_type_id')->nullable();
            $table->foreignId('project_id')->nullable();
            $table->foreignId('country_id')->nullable();
            $table->foreignId('province_id')->nullable();
            $table->foreignId('district_id')->nullable();
            $table->foreignId('created_by')->nullable();
            $table->foreignId('updated_by')->nullable();
            $table->timestamps();
        });

        Schema::create('property_user', function(Blueprint $table) {
            $table->foreignId('user_id');
            $table->foreignId('property_id');
            $table->enum('group', ['user', 'agent', 'contact']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
        Schema::dropIfExists('user_properties');
    }
};
