<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

/* Api routes without autentication */
Route::get('message', function(){
    return 'This is a message for the home page';
});

Route::get('is-logged',function(){
    return auth()->check() ? auth()->user()->only('id','name','email') : false;
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
