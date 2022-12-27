<?php

use App\Http\Controllers\UserSocialLoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::controller(UserSocialLoginController::class)->group(function () {
    // Github
    Route::get('/auth/github/callback', 'githubCallback');
    Route::get('/auth/github/redirect', 'githubRedirect');

    // Google
    Route::get('/auth/google/callback', 'googleCallback');
    Route::get('/auth/google/redirect', 'googleRedirect');
});

require __DIR__.'/auth.php';
