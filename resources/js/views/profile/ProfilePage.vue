<template>
    <div>
        <h2 class="mt-3 mb-4 text-center">{{ title }}</h2>
        <div class="col-6 offset-3">
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="text" class="form-control" :value="getUser.email" readonly>
            </div>
            <div class="form-group">
                <label for="api">token_api</label>
                <textarea id="api" class="form-control" readonly>{{ getUser.api_token }}</textarea>
            </div>
            <div class="text-center">
                <button class="btn btn-dark" @click="logout" :disabled="isLoading">Выйти</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { remove } from "../../services/User";
    import { mapGetters } from 'vuex';
    export default {
        name: "Profile",
        computed:mapGetters(['getUser', 'isLoading']),
        data(){return {
            title: 'Профиль'
        }},
        methods:{
            logout(){
                remove();

                this.$store.commit('setUser', {});
                this.$store.commit('setEquipments',
                    {equipments: {}, paginate: {}});

                this.$router.push('/');
            }
        }
    }
</script>