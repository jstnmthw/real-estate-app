<?php

use App\Http\Controllers\PropertyController;
use App\Http\Resources\CountriesResource;
use App\Http\Resources\UserResource;
use Igaster\LaravelCities\GeoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Geo;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return new UserResource($request->user());
});

Route::middleware(['auth:sanctum', 'throttle:api'])->group(function () {
    //..
});

/**
 * Geo Routing
 */
Route::group(['prefix' => 'geo'], function() {
    Route::get('search/{name}/{parent_id?}',[GeoController::class, 'search']);
    Route::get('item/{id}',[GeoController::class, 'item']);
    Route::get('children/{id}',[GeoController::class, 'children']);
    Route::get('parent/{id}',[GeoController::class, 'parent']);
    Route::get('country/{code}',[GeoController::class, 'country']);
    Route::get('countries',[GeoController::class, 'countries']);
    Route::get('ancestors/{id}',[GeoController::class, 'ancestors']);
    Route::get('breadcrumbs/{id}',[GeoController::class, 'breadcrumbs']);
});

/**
 * Property Routing
 */
Route::get('properties', [PropertyController::class, 'index']);
