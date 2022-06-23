<template>
    <div class="mt-3 mb-3" v-if="message">
        <div class="alert alert-danger" v-if="isError">{{ message }}</div>
        <div class="alert alert-primary" v-else>{{ message }}</div>
    </div>
</template>

<script>
    export default {
        name: "MessageError",
        props: {
            message: {
                type: String,
                request: true
            },
            isError: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>

</style>