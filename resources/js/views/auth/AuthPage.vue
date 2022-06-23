<template>
    <div>
        <h2 class="mt-3 mb-4 text-center">{{ title }}</h2>
        <div class="col-6 offset-3">
            <form action="" @submit.prevent="submit">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control" v-model="user.email" :disabled="isLoading">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" v-model="user.password" :disabled="isLoading">
                </div>
                <div class="form-group text-center">
                    <button class="btn btn-dark" :disabled="isLoading">Войти</button>
                </div>
            </form>
            <div class="text-center">
                <p>или</p>
                <router-link to="/registration">Создать учетку</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { store, load } from "../../services/User";
    export default {
        name: "Auth",
        computed:{
            ...mapGetters(['getUser', 'isLoading']),
        },
        data(){
            return{
                title: 'Авторизация',
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            submit(){
                if (this.user.email === ''){
                    this.$store.commit('setDialog', { text: "Укажите почтовый адрес", isError: true });
                    return;
                }
                else if (this.user.password === ''){
                    this.$store.commit('setDialog', { text: "Укажите пароль", isError: true });
                    return;
                }

                const frmData = new FormData();
                frmData.append('email', this.user.email);
                frmData.append('password', this.user.password);

                this.$store.commit('setIsLoading', true);
                this.$store.commit('setDialog', {});

                axios.post('/api/user/auth', frmData)
                    .then(response => {
                        if(response.data.error){
                            this.$store.commit('setDialog', { text: response.data.error, isError: true });
                        }
                        else if (response.data.message === "Validation errors"){
                            const errors = [
                                (response.data.data.email) ? response.data.data.email.join(', ') : '',
                                (response.data.data.password) ? response.data.data.password.join(', ') : ''
                            ];
                            this.$store.commit('setDialog', { text: errors.join(' '), isError: true });
                        }
                        else{
                            store(response.data.user);
                            const user = load();
                            this.$store.commit('setUser', user);
                            this.$router.push('/');
                        }
                    })
                    .catch(e => {
                        this.$store.commit('setDialog', { text: e.message, isError: true });
                    })
                    .finally(() => {
                        this.$store.commit('setIsLoading', false);
                    })
            }
        }
    }
</script>