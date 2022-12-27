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
        Schema::create('user_social_logins', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('external_id');
            $table->string('access_token');
            $table->string('refresh_token')->nullable();
            $table->json('scopes')->nullable();
            $table->dateTime('expires')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('user_social_logins');
    }
};
