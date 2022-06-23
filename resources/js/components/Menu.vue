<template>
    <div class="menu">
        <ul>
            <li><router-link to="/">Список</router-link></li>
            <li><router-link to="/add-equipment">Добавить</router-link></li>
            <li><router-link to="/about">О программе</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style lang="scss" scoped>
    .menu{
        background: #7d8acf;
        ul, li{
            margin: 0;
            display: inline-block;
            a{
                display: block;
                padding: 10px;
                color: white;
            }
        }
    }
</style>