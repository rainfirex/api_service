<template>
    <div>
        <h2 class="mt-3 mb-4 text-center">{{ title }}</h2>

        <div class="col-6 offset-3 mb-4">
            <div class="form-group">
                <label for="typeEquipment">«Тип оборудования» (наименование)</label>
                <select id="typeEquipment" class="form-control" v-model="selectTypeID" :disabled="isLoading" @change="setSelectMask">
                    <option :value="type.id" v-for="type in types">{{ type.name_type }}</option>
                </select>
                <label for="typeEquipment" v-if="selectMask">Маска: {{ selectMask }}</label>
                <div class="type-info mt-1 mb-1 pt-2 pb-2" v-if="selectMask">
                    <ul class="m-0">
                        <li>N – цифра от 0 до 9;</li>
                        <li>A – прописная буква латинского алфавита;</li>
                        <li>a – строчная буква латинского алфавита;</li>
                        <li>X – прописная буква латинского алфавита либо цифра от 0 до 9;</li>
                        <li>Z –символ из списка: “-“, “_”, “@”.</li>
                    </ul>
                </div>
            </div>

            <div class="form-group">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="serialRadioBtn" name="check" checked
                           @click="isSerial = true" :disabled="isLoading">
                    <label class="form-check-label" for="serialRadioBtn">
                        Серийный номер
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="serialsRadioBtn" name="check"
                           @click="isSerial = false" disabled>
                    <!--:disabled="isLoading"-->
                    <label class="form-check-label" for="serialsRadioBtn">
                        Серийные номера
                    </label>
                </div>
            </div>

            <div class="form-group" v-if="isSerial">
                <label for="serialNumber">Серийный номер</label>
                <input id="serialNumber" type="text" class="form-control" min="10" max="10" v-model="equipment.serialnumber" :disabled="isLoading">
            </div>

            <div class="form-group" v-else>
                <label for="serialNumbers">Серийные номера</label>
                <textarea id="serialNumbers" class="form-control"></textarea>
            </div>

            <div class="form-group">
                <label for="note">Примечание</label>
                <textarea id="note" class="form-control" v-model="equipment.note" :disabled="isLoading"></textarea>
            </div>

            <div class="text-center">
                <button class="btn btn-dark" @click="addEquipment" :disabled="isLoading">Добавить</button>
            </div>
        </div>

        <div class="col-8 offset-2 mb-4" v-if="equipments.length > 0">
            <table class="table table-responsive">
                <thead>
                <tr>
                    <td>Тип</td>
                    <td>Маска</td>
                    <td>Серийный номер</td>
                    <td>Примечание</td>
                    <td>Управление</td>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(equipment, index) in equipments">
                        <td>{{ equipment.name_type }}</td>
                        <td>{{ equipment.mask_serialnumber }}</td>

                        <td v-if="edit.isSerial">
                            <input type="text" class="form-control" v-model="equipment.serialnumber"  @blur="edit.isSerial = false">
                        </td>
                        <td class="text-primary c-pointer" @dblclick="edit.isSerial = !edit.isSerial" title="Двойной клик для редактирование" v-else>{{ equipment.serialnumber }}</td>

                        <td v-if="edit.isNote">
                            <input type="text" class="form-control" v-model="equipment.note" @blur="edit.isNote = false">
                        </td>
                        <td class="text-primary c-pointer" @dblclick="edit.isNote = !edit.isNote" title="Двойной клик для редактирование" v-else>{{ equipment.note }}</td>
                        <td>
                            <a href="#" class="text-danger" @click.prevent="deletFromTable(index)">Удалить</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="text-center">
                <button class="btn btn-dark" @click.prevent="createArray" :disabled="isLoading">Создать</button>
            </div>
        </div>

        <div class="col-8 offset-2 mb-4" v-if="fail.length > 0">
            <h3 class="text-center mb-3">Результат</h3>
            <ul>
                <li class="mb-3" v-for="item in fail">{{ item.message }}
                    <ol class="mt-2">
                        <li class="mb-1" v-for="info in item.info">{{ info.message }}</li>
                    </ol>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import testEquipments from '../../assets/fakes/equipments';
    import { mapGetters } from 'vuex';
    export default {
        name: "EquipmentAdd",
        computed:{
            ...mapGetters(['isLoading']),
        },
        data() {
            return {
                title: 'Форма добавления записи',
                types: [],
                selectTypeID: -1,
                selectMask: '',
                equipment: {
                    serialnumber: '',
                    note: ''
                },
                isSerial: true,
                equipments: [],
                fail: [],
                edit:{
                    isSerial: false,
                    isNote: false
                }
            }
        },
        methods: {
            getType(){
                this.$store.commit('setIsLoading', true);
                this.$store.commit('setDialog', {});

                axios.get(`/api/equipment-type`)
                    .then(response => {
                        this.types =  response.data.data;
                    })
                    .catch(e => {
                        if (e.response.data.auth === false)
                        {
                            this.$store.commit('setDialog', { text: e.response.data.message, isError: true });
                        }
                    })
                    .finally(() => {
                        this.$store.commit('setIsLoading', false);
                    });
            },
            addEquipment(){
                this.$store.commit('setDialog', {});

                if (this.selectTypeID === -1) {
                    this.$store.commit('setDialog', { text: 'Выберите "Тип оборудования"', isError: true });
                    return;
                }
                else if(this.equipment.serialnumber === ''){
                    this.$store.commit('setDialog', { text: 'Заполните поле "серийный номер"', isError: true });
                    return;
                }
                else if(this.equipment.serialnumber.length < 10 || this.equipment.serialnumber.length > 10){
                    this.$store.commit('setDialog',
                        { text: `Поле "серийный номер" должен содержать 10 символов, у вас ${ this.equipment.serialnumber.length }`, isError: true });
                    return;
                }

                const selectType = this.types.find(type => +type.id === +this.selectTypeID);

                this.equipments.push({
                    name_type: selectType.name_type,
                    mask_serialnumber: selectType.mask_serialnumber,
                    type_equipment_id: this.selectTypeID,
                    serialnumber: this.equipment.serialnumber,
                    note: this.equipment.note
                });

                this.equipment.serialnumber = '';
                this.equipment.note = '';
            },
            createArray(){
                this.$store.commit('setDialog', {});

                const frmData = new FormData();
                for (let i = 0; i < this.equipments.length; i++) {
                    frmData.append(`equipments[${i}][name_type]`, this.equipments[i].name_type);
                    frmData.append(`equipments[${i}][mask_serialnumber]`, this.equipments[i].mask_serialnumber);
                    frmData.append(`equipments[${i}][type_equipment_id]`, this.equipments[i].type_equipment_id);
                    frmData.append(`equipments[${i}][serialnumber]`, this.equipments[i].serialnumber);
                    frmData.append(`equipments[${i}][note]`, this.equipments[i].note);
                }

                this.$store.commit('setIsLoading', true);

                axios.post(`/api/equipment`, frmData)
                    .then(response => {
                        if (response.data.message === "Validation errors") {
                            const errors = [];
                            Object.keys(response.data.data).forEach(key => {
                                errors.push(response.data.data[key].join(', '));
                            });
                            this.$store.commit('setDialog', { text: errors.join(', '), isError: true });
                        }
                        else if (response.data.data) {
                            this.$store.commit('setDialog', { text: `Добавлено записей: ${ response.data.data.length }`, isError: false });

                            response.data.data.forEach(item => {

                                let index = this.equipments.findIndex(equipment => equipment.serialnumber === item.serialnumber);
                                console.dir(index);

                                if (index != -1)
                                    this.equipments.splice(index, 1);
                            });
                        }

                        if (response.data.fail) {
                            this.fail = response.data.fail;
                        }
                    })
                    .catch(e => {
                        if (e.response.data.auth === false) {
                            this.$store.commit('setDialog', { text: e.response.data.message, isError: true });
                        }
                    })
                    .finally(() => {
                        this.$store.commit('setIsLoading', false);
                    })
            },
            deletFromTable(index){
                this.equipments.splice(index, 1);
            },
            setSelectMask(){
                const selectType = this.types.find(type => +type.id === +this.selectTypeID);
                this.selectMask = selectType.mask_serialnumber;
            }
        },
        created(){
            this.getType();

            // Fake
            // this.equipments = testEquipments;
        }
    }
</script>

<style lang="scss" scoped>
.type-info{
    border: 1px solid #e1e1dd;
    font-size: 12px;
}
.c-pointer{
    cursor: pointer;
}
</style>
