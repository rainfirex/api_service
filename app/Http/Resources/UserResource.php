<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        if (!empty($this->additional['error']))
            return ['error' => $this->additional['error']];

        return ['user' => [
            'email' => $this->email,
            'api_token' => $this->api_token
            ]
        ];
    }
}
