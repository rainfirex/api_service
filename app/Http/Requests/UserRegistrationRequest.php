<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UserRegistrationRequest extends FormRequest
{
    /**
     * Правила
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email'    => 'required|email|unique:users',
            'password' => 'required|min:6'
        ];
    }

    /**
     * Сообщения об ошибках для определенных правил валидации.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'email.required'    => 'Укажите почту.',
            'email.email'       => 'Укажите почту правильно.',
            'email.unique'      => 'Укажите другую почту.',
            'password.required' => 'Укажите пароль.',
            'password.min'      => 'Укажите минимум 6 символов.'
        ];
    }

    /**
     * Отправляет ответ об ошибке в виде json
     *
     * @param Validator $validator
     */
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }
}
