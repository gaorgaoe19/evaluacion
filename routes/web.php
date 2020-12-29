<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;

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

Route::get('/{option?}/{op?}/{opt?}/{opti?}/{opti4?}/{opti5?}/{opti2?}', function () {
    return view('app');
});

Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);

Route::middleware('auth')->group(function() {
    Route::put('/update', [UserController::class, 'update']);
    Route::post('/logout', [LoginController::class, 'logout']);
});
