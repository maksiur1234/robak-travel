<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MailController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserController::class, 'index']);
Route::post('/send-email', [MailController::class, 'sendMail']);

Route::get('/sanctum/csrf-cookie', function () {
    return response()->json(['csrfToken' => csrf_token()]);
});
