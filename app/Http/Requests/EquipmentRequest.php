<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Support\Facades\DB;

class EquipmentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $id = $this->route('equipment');
        $equipment = DB::table('equipment')->where('type_equipment_id', $id)->first();

        return [
            'serialnumber'      => 'required|unique:equipment,serialnumber,'.$equipment->id,
            'mask_serialnumber' => 'required',
            'name_type'         => 'required'
        ];
    }

    public function messages()
    {
        return [
            'serialnumber.required'      => 'Заполните sn',
            'serialnumber.unique'        => 'Серийный номер используется',
            'mask_serialnumber.required' => 'Заполните mask',
            'name_type.required'         => 'Заполните type',
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
