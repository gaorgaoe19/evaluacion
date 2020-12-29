<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if(Auth::attempt($credentials)) {
            $request->session()->regenerate();
            $message = 'Acceso Autorizado.';
            return response()->json(compact('message'), 200);
        }

        $message = 'Credenciales Invalidas.';
        return response()->json(compact('message'), 401);
    }

    public function logout()
    {
        Auth::logout();
        return true;
    }
}
