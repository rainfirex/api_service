<template>
    <div class="dialog" v-if="getDialog.text" @click="close">
        <div class="col-8 offset-2">
            <h3 v-if="getDialog.isError" :class="{'error-text-color': getDialog.isError}">Ошибка</h3>
            <h3 v-else>Выполнено</h3>
            <p>{{ getDialog.text }}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "DialogInfo",
        computed:mapGetters(['getDialog']),
        methods:{
            close(){
                this.$store.commit('setDialog', { text: '', isError: false});
            }
        }
    }
</script>

<style lang="scss" scoped>

    div.dialog{
        cursor: pointer;
        width: 100%;

        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        background: #000000b8;
        color: #ffffff;

        padding: 25px;
        z-index: 97;

        transition: 0.3s;

        &:hover{
            background: #2e2e2e;
        }
        .error-text-color{
            color: red;
        }
    }

</style>