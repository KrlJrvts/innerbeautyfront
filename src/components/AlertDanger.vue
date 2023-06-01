<template>
    <div v-if="message !== ''" class="row justify-content-center alert-row">
        <div class="col-8">
            <div class="alert alert-danger" role="alert">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AlertDanger",
    props: {
        message: ''
    }
}
</script>

<style scoped>



</style>