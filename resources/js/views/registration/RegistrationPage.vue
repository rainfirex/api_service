<template>
    <div>
        <h2 class="mt-3 mb-4 text-center">{{ title }}</h2>
        <div class="col-6 offset-3">
            <form @submit.prevent="submit">
                <div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" type="email" class="form-control" :disabled="isLoading" v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label for="pass">Пароль</label>
                        <input id="pass" type="password" class="form-control" :disabled="isLoading" v-model="user.password">
                    </div>
                    <div class="form-group">
                        <label for="pass2">Еще раз пароль</label>
                        <input id="pass2" type="password" class="form-control" :disabled="isLoading" v-model="user.password2">
                    </div>
                    <div class="text-center">
                        <button class="btn btn-dark" :disabled="isLoading">Зарегистрироваться</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Registration",
        computed: {
            ...mapGetters(['isLoading'])
        },
        data(){
            return{
                title: 'Регистрация',

                user: {
                  email: '',
                  password: '',
                  password2: ''
                }
            }
        },
        methods:{
            submit(){
                if (this.user.email === ''){
                    this.$store.commit('setDialog', { text: "Укажите почту.", isError: true });
                    return;
                }
                else if (this.user.password === ''){
                    this.$store.commit('setDialog', { text: "Укажите пароль.", isError: true });
                    return;
                }
                else if (this.user.password.length < 6){
                    this.$store.commit('setDialog', { text: "Длина пароля должна быть минимум 6 символов.", isError: true });
                    return;
                }
                else if (this.user.password2 === ''){
                    this.$store.commit('setDialog', { text: "Укажите еще раз пароль.", isError: true });
                    return;
                }
                else if (this.user.password2.length < 6){
                    this.$store.commit('setDialog', { text: "Длина пароля должна быть минимум 6 символов.", isError: true });
                    return;
                }
                else if(this.user.password !== this.user.password2){
                    this.$store.commit('setDialog', { text: "Пароли не совпадают", isError: true });
                    return;
                }


                const frmData = new FormData();
                frmData.append('email', this.user.email)
                frmData.append('password', this.user.password)

                this.$store.commit('setIsLoading', true);
                this.$store.commit('setDialog', {});

                axios.post(`/api/user/reg`, frmData)
                    .then(response => {
                        if(response.data.error){
                            this.$store.commit('setDialog', { text: response.data.error, isError: true });
                        }
                        else if (response.data.message === "Validation errors"){
                            const errors= [
                                (response.data.data.email) ? response.data.data.email.join(', ') : '',
                                (response.data.data.password) ? response.data.data.password.join(', ') : ''
                            ];
                            this.$store.commit('setDialog', { text: errors.join(' '), isError: true });
                        }
                        else {
                            this.$store.commit('setDialog', { text: "Учетная запись зарегистрирована.", isError: false });

                            this.user = {
                                email: '',
                                password: '',
                                password2: ''
                            }
                            this.$router.push({name: 'auth'})
                        }
                    })
                    .catch(e => {
                        this.$store.commit('setDialog', { text: e.message, isError: true });
                    })
                    .finally(() => {
                        this.$store.commit('setIsLoading', false);
                    });
            }
        }
    }
</script>