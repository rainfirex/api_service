<template>
    <div v-if="isLoading" class="text-center loading">
        <img src="../assets/img/loading.svg" alt="loading">
    </div>
</template>

<script>
    export default {
        props:{
            isLoading: {
                type: Boolean,
                request: true
            },
        },
        name: "Loading"
    }
</script>

<style lang="scss" scoped>
    div.loading{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;

        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        background: #00000054;
        img{
            user-select: none;
            max-width: 450px;
            height: 100%;
        }
    }
</style>