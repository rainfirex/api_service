<template>
    <div class="wrapper">
        <Header/>
        <Menu/>
        <div class="conteiner">
            <router-view></router-view>
        </div>
        <Loading :isLoading="isLoading"/>
        <DialogInfo/>
    </div>
</template>

<script>
    import Header from '../js/components/Header';
    import Menu from '../js/components/Menu';
    import Loading from '../js/components/Loading';
    import DialogInfo from '../js/components/DialogInfo';

    import { load } from "../js/services/User";
    import { mapGetters } from 'vuex';
    export default {
        components:{
            Header,
            Menu,
            Loading,
            DialogInfo
        },
        computed: {
            ...mapGetters(['isLoading'])
        },
        created(){
            this.$store.commit('setUser', load());
        }
    }
</script>
<style lang="scss" scoped>
    .wrapper{
        width: 80%;
        margin: 0 auto;
        padding: 10px 0 10px 0 ;
        .conteiner{
            margin: 18px 0 18px 0;
            padding: 18px;
            border: solid 1px #a5a5a5;
            border-radius: 5px;
            position: relative;
            min-height: 620px;
        }
    }
    @media (min-width: 1170px) {
        .wrapper {
            max-width: 1170px;
        }
    }
</style>