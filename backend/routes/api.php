<?php

use App\Http\Resources\CountriesResource;
use App\Http\Resources\UserResource;
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


Route::get('countries', function () {
    return CountriesResource::collection(Geo::countries()->get());
});
Route::get('{country}', function ($country) {
    $country = Geo::countries()->where('name', Str::ucfirst($country))->first();

    if (blank($country)) {
        abort(404);
    }

    return new CountriesResource($country);
})->where('name', '[A-Za-z]+');;

\Igaster\LaravelCities\Geo::ApiRoutes();

Route::group(['prefix' => 'geo'], function() {
    Route::get('search/{name}/{parent_id?}',[\Igaster\LaravelCities\Geo::class, 'search']);
    Route::get('item/{id}',[\Igaster\LaravelCities\Geo::class, 'getItem']);
    Route::get('children/{id}',[\Igaster\LaravelCities\Geo::class, 'getChildren']);
    Route::get('parent/{id}',[\Igaster\LaravelCities\Geo::class, 'getParent']);
    Route::get('country/{code}',[\Igaster\LaravelCities\Geo::class, 'country']);
    Route::get('countries',[\Igaster\LaravelCities\Geo::class, 'getCountries']);
    Route::get('ancestors/{id}',[\Igaster\LaravelCities\Geo::class, 'getA']);
    Route::get('breadcrumbs/{id}',[\Igaster\LaravelCities\Geo::class, 'breadcrumbs']);
});

