<template>
    <section id="home">
        <Navbar :push-to-home="pushToHome" :push-to-login="pushToLogin"/>
        <div class="container homepage-data">
            <div class="row mb-5">
                <div class="col mt-5  ">
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

