<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class EquipmentCollectionRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'equipments'                     => 'required|array',
            'equipments.*.serialnumber'      => 'required|unique:equipment',
            'equipments.*.mask_serialnumber' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'equipments.required'                     => 'Заполните данными',
            'equipments.array'                        => 'Укажите массив',
            'equipments.*.serialnumber.required'      => 'Заполните sn',
            'equipments.*.serialnumber.unique'        => 'sn используется',
            'equipments.*.mask_serialnumber.required' => 'Заполните mask'
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
