<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserAuthRequest;
use App\Http\Requests\UserRegistrationRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Service\UserService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function reg(UserRegistrationRequest $request){

        $resource = UserService::registration($request->all());

        return response($resource);
    }

    public function auth(UserAuthRequest $request){

        $resource = UserService::auth($request->all());

        return response($resource);
    }
}
