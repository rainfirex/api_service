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
        ];
    }

    public function messages()
    {
        return [
            'equipments.required'                     => 'Заполните массив',
            'equipments.array'                        => 'Укажите массив',
            'equipments.*.serialnumber.required'      => 'Серийный номер не указан',
            'equipments.*.serialnumber.unique'        => 'Серийный номер используется',
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
