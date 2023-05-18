<template>
    <section id="home">
        <div class="d-flex justify-content-end p-4">
            <a class="btn" @click="pushToLogin"><i class="fa-solid fa-arrow-right-to-bracket fa-3x"></i></a>
        </div>
        <div class="container homepage-data">
            <div class="row mb-5">
                <div class="col">
                    <h1>{{ sloganGenerator() }}</h1>
                </div>
            </div>
            <div class="row ">
                <div class="col d-flex justify-content-center">
                    <button @click="pushToRegister" class="btn btn-outline-light w-25">Start selling today
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
        RegisterView() {
            return RegisterView
        }
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
        pushToLogin() {
            router.push('/login')
        },
        pushToRegister() {
            router.push('/register')
        },
        sloganGenerator() {
            let gen = Math.random();
            if (gen < 0.3) {
                return this.sloganA
            } else if (gen > 0.3 && gen < 0.6) {
                return this.sloganB;
            } else {
                return this.sloganC
            }
        },

    }
}
</script>


<style>

.homepage-data {
    width: 100vw;
    height: 40%;
    position: relative;
    top: 20%;
}

h1 {
    color: white;
    font-family: 'Playfair Display', serif;

}

a {
    color: #660000 !important;
    transition: all 500ms ease !important;
    transform: scale(1) !important;
}

a:hover {
    /*transition-duration: 1000ms!important;*/
    transform: scale(1.3) perspective(1px) !important;
}

button:hover {
    background-color: #660000 !important;
    color: white !important;
    transition: all 700ms ease !important;
    transform: scale(1.1) !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 10px #660000;
}

</style>
