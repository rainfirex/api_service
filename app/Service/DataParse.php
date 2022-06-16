<?php
namespace App\Service;

class DataParse
{
    private $rawData;

    private $successData;
    private $failData;

    /**
     * Получить оборудование подходящее по маске
     *
     * @return mixed
     */
    public function getSuccessData()
    {
        return $this->successData;
    }

    /**
     * Получить 1е оборудование подходящее по маске из массива
     *
     * @return null
     */
    public function getSuccessEquipmentOne(){
        return (!empty($this->successData[0]['equipment']) ? $this->successData[0]['equipment'] : null);
    }

    /**
     * Получить оборудование не подходящее по маске
     *
     * @return mixed
     */
    public function getFailData()
    {
        return $this->failData;
    }

    /**
     * DataParse constructor.
     * @param $data
     */
    public function __construct($data)
    {
        $this->rawData = $data;
    }

    /**
     * Сопоставить коллекцию оборудования и отделить успешные от нет
     */
    public function parse(){

        for ($i = 0; $i < count($this->rawData); $i++ ) {

            foreach ($this->rawData[$i] as $key => $value){
                if ($key === 'mask_serialnumber'){
                    $name = $this->rawData[$i]['name_type'];
                    $serial = $this->rawData[$i]['serialnumber'];

                    $message = [];

                    $result = $this->test($serial, $value, $message);

                    $massageTitle = sprintf('equipment: %s, sn: %s, mask: %s, result: %s',
                        $name, $serial, $value, ($result ? "true" : "false"));

                    if ($result){
                        $this->successData[] = ['equipment'=>$this->rawData[$i], 'message' => $massageTitle];
                    }
                    else {
                        $this->failData[] = ['equipment' => $this->rawData[$i], 'message' => $massageTitle, 'info' => $message];
                    }
                }
            }
        }
        $this->rawData = null;
    }

    /**
     * Сопоставить символы серийного номера к символам маски.
     *
     * @param string $serial
     * @param string $mask
     * @param array $message
     * @return bool
     */
    private function test(string $serial, string $mask, array &$message = []): bool {
        $serial = str_split($serial);
        $maskArray = str_split($mask);

        for ($i=0; $i < count($maskArray); $i++){
            $charSerial = $serial[$i];
            $charMask   = $maskArray[$i];

            switch ($charMask){
                case "N":
                    $isValid = preg_match('/[0-9]{1}/', $charSerial);
                    $is = $isValid ? 'соответствует' : 'не соответствует';
                    $message[] = [
                        'message'=>'Символ "'.$charSerial.'" '. $is.' символу маски: "'.$charMask.'" [0-9]{1}',
                        'result' => (bool)$isValid
                    ];
                    break;
                case "A":
                    $isValid = preg_match('/[A-Z]{1}/', $charSerial);
                    $is = $isValid ? 'соответствует' : 'не соответствует';
                    $message[] = [
                        'message'=>'Символ "'.$charSerial.'" '. $is.' символу маски: "'.$charMask.'" [A-Z]{1}',
                        'result' => (bool)$isValid
                    ];
                    break;
                case "a":
                    $isValid = preg_match('/[a-z]{1}/', $charSerial);
                    $is = $isValid ? 'соответствует' : 'не соответствует';
                    $message[] = [
                        'message'=>'Символ "'.$charSerial.'" '. $is.' символу маски: "'.$charMask.'" [a-z]{1}',
                        'result' =>(bool)$isValid
                    ];
                    break;
                case "X":
                    $isValid = preg_match('/[A-Z0-9]{1}/', $charSerial);
                    $is = $isValid ? 'соответствует' : 'не соответствует';
                    $message[] = [
                        'message'=> 'Символ "'.$charSerial.'" '. $is.' символу маски: "'.$charMask.'" [A-Z0-9]{1}',
                        'result' => (bool)$isValid
                    ];
                    break;
                case "Z":
                    $isValid = preg_match('/[@-_]{1}/', $charSerial);
                    $is = $isValid ? 'соответствует' : 'не соответствует';
                    $message[] = [
                        'message'=> 'Символ "'.$charSerial.'" '. $is.' символу маски: "'.$charMask.'" [@-_]{1}',
                        'result' => (bool)$isValid
                    ];
                    break;
                default:
                    $message[] = ['message' => 'Неверный символ маски шаблона "'.$charMask.'"', 'result' => false];
                    break;
            }
        }

        $indexError = array_search(false, array_column($message, 'result'));

        return ($indexError !== false) ? false : true;
    }
}