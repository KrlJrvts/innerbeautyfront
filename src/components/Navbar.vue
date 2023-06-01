<template>
    <div class="row col-12">
        <div class="col d-flex justify-content-start m-1">
        </div>
        <div class="col-6 d-flex justify-content-center ps-5 p-2">
            <a class="homepage-brand-name" @click="pushToHome">Inner
                <i class="fa-regular fa-heart fa-beat-fade fa-md"></i>
                Beauty</a>
        </div>
        <div class="col d-flex justify-content-end p-3">
            <a class="homepage-button-login" @click="pushToLogin">
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