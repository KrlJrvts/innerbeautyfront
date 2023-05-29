<template>
    <section id="home">
        <Navbar :push-to-home="pushToHome" :push-to-login="pushToLogin"/>
        <div class="container homepage-data">
            <div class="row mb-5">
                <div class="col">
                    <h1>{{ sloganGenerator() }}</h1>
                </div>
            </div>
            <div class="row ">
                <div class="col d-flex justify-content-center">
                    <button @click="pushToRegister" class="btn btn-outline-light w-25 button-homepage">Start selling
                        today
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
        </div>
            <LogOutModal/>

    </section>
    <section id="testimonials">


    </section>
</template>

<script>


import router from "@/router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Navbar from "@/components/Navbar.vue";
import LogOutModal from "@/components/Modals/LogOutModal.vue";

export default {
    name: 'HomeView',
    computed: {

    },
    components: {Navbar, FontAwesomeIcon, LogOutModal},
    data() {
        return {
            sloganA: 'Transform Lives, Save Lives: Organ Selling Made Easy.',
            sloganB: 'Be a Hero, Sell a Part: Join our Organ Selling Community.',
            sloganC: 'Bringing Hope to Desperate Hearts: The Leading Organ Selling Marketplace.'
        }
    },
    methods: {

        pushToHome() {
            router.push({name: 'homeRoute'})
        },
        pushToLogin() {
            router.push({name: 'loginRoute'})
        },
        pushToRegister() {
            router.push({name: 'registerRoute'})
        },
        sloganGenerator() {
            let value = Math.random();
            if (value < 0.3) {
                return this.sloganA
            } else if (value > 0.3 && value < 0.6) {
                return this.sloganB;
            } else {
                return this.sloganC
            }
        },

    }
}
</script>


<style>

h1 {
    color: white;
    font-family: 'Playfair Display', serif;

}

.homepage-brand-name {
    text-decoration: none !important;
    font-family: 'Playfair Display', serif;
    font-size: 225%;
    color: white;
    transform: scale(1) !important;
    transition: all 700ms ease !important;
}

.homepage-brand-name:hover {
    cursor: pointer;
    color: #FF0000;
    transform: scale(1.1) !important;
}

.homepage-brand-name .fa-heart {
    color: #660000;
    transform: scale(1) !important;

}

.homepage-brand-name:hover .fa-heart {
    color: white;
    transition: all 2s ease !important;

}

.homepage-data {
    position: relative;
    top: 18%;
}

.homepage-btn-login {
    color: #660000 !important;
    transition: all 500ms ease !important;
    transform: scale(1) !important;
}

.homepage-btn-login:hover {
    /*transition-duration: 1000ms!important;*/
    transform: scale(1.3) perspective(1px) !important;
    cursor: pointer;
}

.button-homepage {
    font-family: 'Playfair Display', serif !important;
    font-size: 120% !important;
}

.button-homepage:hover {
    background-color: #660000 !important;
    color: white !important;
    transition: all 700ms ease !important;
    transform: scale(1.1) !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 10px #660000;
}



</style>
