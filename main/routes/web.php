<?php

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
    return view('welcome');
});


Route::prefix('map')->group(function () {
    Route::get('/', function () {
        return view('map.index');
    });

    Route::get('/getLocalMap', 'MapController@getLocalMap');
    Route::get('/grabCovid9Data', 'MapController@grabCovid9Data');
    Route::get('/updateLocalMap', 'MapController@updateLocalMap');
});