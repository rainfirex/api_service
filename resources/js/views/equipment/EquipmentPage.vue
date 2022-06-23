<template>
    <div>
        <h2 class="mt-3 mb-4 text-center">{{ title }}</h2>
        <div class="col-6 offset-3 mb-3" v-if="equipment && equipment.type_equipment">
            <form action="" @submit.prevent="updateEquipment">
                <div class="form-group">
                    <label for="type">«Тип оборудования» (наименование)</label>
                    <input id="type" class="form-control" v-model="equipment.type_equipment.name_type" />
                </div>

                <div class="form-group">
                    <label for="mask">Маска</label>
                    <input id="mask" class="form-control" v-model="equipment.type_equipment.mask_serialnumber" />
                </div>

                <div class="form-group">
                    <label for="serialNumber">Серийный номер</label>
                    <input type="text" class="form-control" id="serialNumber" v-model="equipment.serialnumber">
                </div>

                <div class="form-group">
                    <label for="note">Примечание</label>
                    <textarea id="note" class="form-control" v-model="equipment.note"></textarea>
                </div>

                <div class="text-center">
                    <button class="btn btn-dark" disabled>Обновить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "equipmentPage",
        computed: {
            ...mapGetters(['isLoading', 'getEquipments']),
            equipmentId() {
                return this.$route.params.id;
            }
        },
        data(){
            return {
                title: 'Форма изменения записи',
                equipment: {}
            }
        },
        methods:{
            loadEquipment(){
                this.$store.commit('setIsLoading', true);

                axios.get(`/api/equipment/${ this.equipmentId }`)
                    .then(response => {
                        this.equipment = response.data;
                    })
                    .catch(e => {
                        if (e.response.data.auth === false)
                        {
                            this.isUnauthenticated = true;
                            this.message = e.response.data.message;
                        }
                    })
                    .finally(() => {
                        this.$store.commit('setIsLoading', false);
                    });
            },
            updateEquipment(){
                const frmData = new FormData();
                frmData.append('serialnumber', this.equipment.serialnumber);
                frmData.append('name_type', this.equipment.type_equipment.name_type);
                frmData.append('mask_serialnumber', this.equipment.type_equipment.mask_serialnumber);
                frmData.append('note', this.equipment.note);
                frmData.append('_method', 'PUT');


                this.$store.commit('setIsLoading', true);

                axios.post(`/api/equipment/${ this.equipmentId }`, frmData)
                    .then(response => {

                    })
                    .catch(e => {
                        if (e.response.data.auth === false)
                        {
                            this.isUnauthenticated = true;
                            this.message = e.response.data.message;
                        }
                    })
                    .finally(() => {
                        this.$store.commit('setIsLoading', false);
                    })
            }
        },
        created(){
            const equipment = this.$store.getters.getEquipment(this.equipmentId);
            if (equipment){
                this.equipment = equipment;
            }
            else {
                this.loadEquipment();
            }
        }
    }
</script>
