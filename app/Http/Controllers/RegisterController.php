<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->only('name', 'password', 'email');
        $user = User::create([
            'email' => $data['email'],
            'name' => $data['name'],
            'password' => bcrypt($data['password'])
        ]);
        Auth::login($user);
        $message = 'Registro Exitoso.';
        return response()->json(compact('message'), 200);
    }
}
