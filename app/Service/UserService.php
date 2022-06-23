<?php

namespace App\Service;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserResource;
use Illuminate\Support\Str;

class UserService
{
    /**
     * Регистрация
     *
     * @param array $data
     * @return UserResource
     */
    public static function registration(array $data): UserResource{
        $email = mb_strtolower(trim($data['email']));

        $user = User::create([
            'email'     => $email,
            'password'  => Hash::make($data['password']),
            'api_token' => Str::random(80)
        ]);

        return new UserResource($user);
    }

    /**
     * Авторизация
     *
     * @param array $data
     * @return UserResource
     */
    public static function auth(array $data): UserResource{
        $email = mb_strtolower(trim($data['email']));

        $user = User::whereEmail($email)->first();

        if (!empty($user) && Hash::check($data['password'], $user->password)){
            return new UserResource($user);
        }
        else{
            return (new UserResource(null))->additional([
                'error' => 'Что - то пошло не так!'
            ]);
        }
    }
}