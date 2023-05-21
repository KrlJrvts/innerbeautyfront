<template>
    <section id="home">
        <div class="row col-12">
            <div class="col d-flex justify-content-start p-3">
                <h3>LOGO? </h3>
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


    </section>
    <section id="testimonials">


    </section>
</template>

<script>


import router from "@/router";
import RegisterView from "@/views/RegisterView.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: 'HomeView',
    computed: {

    },
    components: {FontAwesomeIcon},
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

hr {
    border: none;
    height: 2px;
    background-color: transparent;
    position: relative;
}

hr:before {
    content: "";
    position: absolute;
    top: -6px;
    left: 0;
    right: 0;
    height: 10px;
    background-image: url('https://i.imgur.com/2P2cs8i.png'); /* Replace with blood drop image URL */
    background-repeat: no-repeat;
    background-position: center;
    animation: blood-drip 1s infinite;
}

@keyframes blood-drip {
    0% {
        transform: translateY(-10px);
        opacity: 0;
    }
    50% {
        transform: translateY(10px);
        opacity: 1;
    }
    100% {
        transform: translateY(20px);
        opacity: 0;
    }
}

</style>
