<template>
    <div class="row col-12">
        <div class="col d-flex justify-content-start m-1">
            <img src="../assets/Logo.jpg" style="height: 70px; width: 75px; opacity: 0.5">
        </div>
        <div class="col-6 d-flex justify-content-center p-2 ">
            <a class="homepage-brand-name" @click="pushToHome">Inner
                <i class="fa-regular fa-heart fa-beat-fade fa-md"></i>
                Beauty</a>
        </div>
        <div class="col d-flex justify-content-end p-3">
            <a class="homepage-btn-login" @click="pushToLogin">
                <i class="fa-solid fa-arrow-right-to-bracket fa-3x"></i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    props: {
        pushToHome: {},
        pushToLogin: {}
    }
}
</script>
<style scoped>

section {
    color: black;
}

input {
    background-color: transparent !important;
    /*background-color: grey;*/
    color: whitesmoke;
}

input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 500px 10px #660000 !important;


}


</style>