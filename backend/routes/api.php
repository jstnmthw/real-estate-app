<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\PropertyController;
use App\Http\Resources\UserResource;
use Igaster\LaravelCities\GeoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/**
 * Geo Routing
 */
Route::group(['prefix' => 'geo', 'middleware' => 'throttle:api'], function() {
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
Route::group(['prefix' => 'property', 'middleware' => 'throttle:api'], function() {
    Route::get('search', [PropertyController::class, 'search'])->name('property.search');
    Route::get('/', [PropertyController::class, 'index'])->name('property.list');
    Route::get('show/{property}', [PropertyController::class, 'show'])->name('property.show');
    Route::post('update/{property}', [PropertyController::class, 'update'])->name('property.update');
    Route::post('store/{property}', [PropertyController::class, 'store'])->name('property.store');
    Route::post('destroy/{property}', [PropertyController::class, 'destroy'])->name('property.destroy');
    Route::post('edit/{property}', [PropertyController::class, 'edit'])->name('property.edit');
    Route::post('create/{property}', [PropertyController::class, 'create'])->name('property.create');
});

/**
 * Page Routing
 */
Route::group(['prefix' => 'page', 'middleware' => 'throttle:api'], function() {
    Route::get('/', [PageController::class, 'index'])->name('page.list');
    Route::get('{locale}/{page}', [PageController::class, 'show'])->name('page.show');
    Route::post('update/{page}', [PageController::class, 'update'])->name('page.update');
    Route::post('store/{page}', [PageController::class, 'store'])->name('page.store');
    Route::post('destroy/{page}', [PageController::class, 'destroy'])->name('page.destroy');
    Route::post('edit/{page}', [PageController::class, 'edit'])->name('page.edit');
    Route::post('create/{page}', [PageController::class, 'create'])->name('page.create');
});
