<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->validateCsrfTokens(except: [

            'http://localhost:8000/api/v1/tasks',
            'http://localhost:8000/api/v1/tasks/*',
    
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
