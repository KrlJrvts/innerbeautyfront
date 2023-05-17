<template>
    <div v-if="message !== ''" class="row justify-content-center">
        <div class="col-5">
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
.alert {
    font-size: x-large;
    font-weight: bold;
    color: white;
    background-color: transparent;
    border-color: crimson;

}

</style>