<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateRequest;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(UpdateRequest $request)
    {
        $data = $request->only('name', 'email', 'password');
        $user = auth()->user();

        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password = bcrypt($data['password']);

        $user->save();

        $message = 'Los datos han sido Actualizados.';
        return response()->json(compact('message'), 200);
    }
}
