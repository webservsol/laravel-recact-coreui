<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');
Route::get('users', 'API\UserController@users');
Route::delete('user/delete/{id}', 'API\UserController@delete');
Route::get('user/edit/{id}', 'API\UserController@edit');
Route::post('user/update/{id}', 'API\UserController@update');