<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('api/v1/tasks', [TaskController::class, 'index']);
Route::post('api/v1/tasks', [TaskController::class, 'store']);
Route::delete('api/v1/tasks/{id}', [TaskController::class, 'markAsDone']);
