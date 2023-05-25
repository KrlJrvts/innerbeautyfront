<template>
    <section id="error">
            <div class="container account-container text-center">
                <div class="row justify-content-center">
                    <div class="col col-12 mt-5 d-flex justify-content-center">
                        <button @click="toHomePage" type="submit"
                                class="btn btn-outline-light button-homepage account-button error-page-button">Go Back
                        </button>
                    </div>
                </div>
            </div>
    </section>
</template>
<script>


import router from "@/router";

export default {
    name: "ErrorView",
    methods: {
        toHomePage(){
            router.push({name:'homeRoute'})
        }
    }
}
</script>

<style scoped>
h1 {
    color: black
}

#error {
    background-image: url("../assets/errorphotos/404Error.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
.error-page-button {
    position: absolute;
    top: 80%;
    width: 700px;


}

</style>