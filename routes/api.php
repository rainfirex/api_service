<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EquipmentController;
use App\Http\Controllers\EquipmentTypeController;
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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::prefix('/user')->group(function() {

    Route::post('/reg',  [UserController::class, 'reg']);

    Route::post('/auth', [UserController::class, 'auth']);
});


Route::middleware('api.token')->group(function (){

    Route::apiResource('/equipment', EquipmentController::class);

    Route::get('/equipment-type', [EquipmentTypeController::class, 'index']);

});

