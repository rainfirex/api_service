<template>
    <div>
        <h2 class="mt-3 mb-4 text-center">{{ title }}</h2>
        <div class="col-6 offset-3 mb-3"  v-if="equipments.length > 0">
            <div class="mb-3">
                <div class="form-check form-check-inline">
                    <input type="radio" name="radio1" id="serialRadioBtn" v-model="typeSearch" :value="'serialnumber'" :checked="typeSearch === 'serialnumber'">
                    <label class="form-check-label pl-2" for="serialRadioBtn">
                        Серийный номер
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" name="radio1" id="noteRadioBtn" v-model="typeSearch" :value="'note'" :checked="typeSearch === 'note'">
                    <label class="form-check-label pl-2" for="noteRadioBtn">
                        Примечание
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-9">
                    <input type="search" class="form-control" :placeholder="textPlaceholderSearch" :disabled="isLoading" v-model="textSearch">
                </div>
                <div class="col-2">
                    <button class="btn btn-dark" :disabled="isLoading" @click.prevent="searchEquipments" v-if="textSearch.length > 2">Искать</button>
                    <button class="btn btn-dark" :disabled="isLoading" @click.prevent="loadEquipments('')" v-else>Все</button>
                </div>
            </div>
        </div>

        <div class="col-6 offset-3 mb-3 list-conteiner"  v-if="equipments.length > 0">
            <ul class="list-group">
                <li class="list-group-item" v-for="equi in equipments">

                    <p>Оборудование: <b>{{ equi.type_equipment.name_type }}</b><span class="pl-2">sn: {{ equi.serialnumber }}</span></p>
                    <p>{{ equi.note }}</p>

                    <div class="text-center">
                        <router-link class="btn btn-primary btn-sm mr-1" :to="{ name: 'equipment', params: { id: equi.id } }">Открыть</router-link>
                        <botton class="btn btn-danger btn-sm">Удалить</botton>
                    </div>
                </li>
            </ul>
        </div>

        <div class="text-center" v-if="paginate.last_page > 1">
            <ul class="pagination d-inline-flex">
                <li class="page-item" :class="{'disabled' : isLoading}" v-if="paginate.current_page > 3">
                    <a href="#" class="page-link" @click.prevent="loadEquipments(1)">first</a>
                </li>
                <li class="page-item" v-for="n in paginate.last_page" :class="{'active' : n == paginate.current_page, 'disabled' : isLoading}">
                    <a href="#" class="page-link" @click.prevent="loadEquipments(n)">{{ n }}</a>
                </li>
                <li class="page-item" :class="{'disabled' : isLoading}" v-if="(paginate.last_page - paginate.current_page) >= 3">
                    <a href="#" class="page-link" @click.prevent="loadEquipments(paginate.last_page)">last</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "ListEquipment",
        computed: {
            ...mapGetters(['isLoading', 'getEquipments']),
            textPlaceholderSearch(){
                return this.typeSearch === 'serialnumber' ? 'Поиск по серийному номеру (3 символа)' : 'Поиск по примечанию (3 символа)'
            }
        },
        data(){
            return{
                title: 'Список оборудования',
                equipments: [],
                paginate: {},
                typeSearch: 'serialnumber',
                textSearch: ''
            }
        },
        methods: {
            loadEquipments(page_number){
                const page = (page_number) ? `?${this.paginate.page_name}=${page_number}` : '';

                this.$store.commit('setIsLoading', true);
                this.$store.commit('setDialog', {});

                axios.get(`/api/equipment${page}`)
                    .then(response => {
                        this.equipments = response.data.data;
                        this.paginate = response.data.paginate;

                        this.$store.commit('setEquipments',
                            {equipments: this.equipments, paginate: this.paginate});
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
            searchEquipments(){
                if (this.textSearch == '' || this.typeSearch == ''){
                    this.$store.commit('setDialog', { text: "Строка поиска пуста или не выбран тип.", isError: true });
                    return;
                }

                const searchString = `${ this.typeSearch }=${ this.textSearch }`;

                this.$store.commit('setIsLoading', true);
                this.$store.commit('setDialog', {});

                axios.get(`/api/equipment?${ searchString }`)
                    .then(response => {

                        const data = response.data.data_search;
                        if (data.length > 0) {
                            this.equipments = data;
                            this.paginate = response.data.paginate;
                        } else {
                            this.$store.commit('setDialog', { text: "Ничего не найдено!", isError: false });
                        }
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
            openEquipment(id) {
                this.$router.push({name: 'Article', params: {id}});
            },
        },
        created(){
            const tmpEquipments = this.getEquipments;

            if (tmpEquipments.equipments.length > 0){
                this.equipments = tmpEquipments.equipments;
                this.paginate   = tmpEquipments.paginate;
            }
            else {
                this.loadEquipments('');
            }
        }
    }
</script>
<style lang="scss" scoped>

    .list-conteiner{
        min-height: 370px;

    }
    .page-item{
        .page-link{
            color: #7d8acf;
        }
        &.active .page-link{
            background-color: #7d8acf;
            border-color: #7d8acf;
            color: white;
        }
    }
</style>
