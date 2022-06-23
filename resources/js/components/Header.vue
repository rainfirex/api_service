<template>
    <header>
        <div class="row">
            <div class="col-8">
                <h1>{{ title }}</h1>
            </div>
            <div class="col-4 auth">
                <div v-if="!getUser.auth">
                    <router-link to="/auth">войти</router-link>
                </div>
                <div v-else>
                    <router-link to="/profile">{{ getUser.email }}</router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Header",
        computed: mapGetters(['getUser']),
        setup: () => ({
            title: 'Api service'
        }),
    }
</script>

<style lang="scss" scoped>
    .auth{
        a{
            text-align: right;
            display: block;
            margin-top: 30px;
        }
    }
</style>