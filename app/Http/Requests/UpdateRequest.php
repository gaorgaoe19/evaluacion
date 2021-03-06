<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $email = auth()->user()->email;
        return [
            'email' => ['required', 'email', 'unique:users,email,'.$email.',email'],
            'password' => ['required', 'confirmed'],
            'name' => ['required']
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'El E-mail es requerido.',
            'email.unique' => 'Este E-mail ya esta en uso.',
            'password.required' => 'La Contraseña es requerido.',
            'password.confirmed' => 'Las Contraseñas no coinciden.',
            'name.required' => 'El Nombre es requerido.',
        ];
    }
}
