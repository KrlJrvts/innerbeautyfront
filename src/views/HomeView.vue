<template>
    <section id="home">
        <div class="d-flex justify-content-end p-4">
            <a class="btn" @click="pushTo"><i class="fa-solid fa-arrow-right-to-bracket fa-3x"></i></a>
        </div>
        <div class="container homepage-data">
            <div class="row">
                <div class="col">
                    <h1>{{ sloganGenerator () }}</h1>
                </div>
            </div>
        </div>


    </section>
    <section id="testimonials">


    </section>
</template>

<script>


import router from "@/router";

export default {
    name: 'HomeView',
    components: {},
    data() {
        return {
            sloganA: 'Transform Lives, Save Lives: Organ Selling Made Easy.',
            sloganB: 'Be a Hero, Sell a Part: Join our Organ Selling Community.',
            sloganC: 'Bringing Hope to Desperate Hearts: The Leading Organ Selling Marketplace.'
        }
    },
    methods: {
        pushTo() {
            router.push('/login')
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

.homepage-data{
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
    color: red !important;
    transition: all 500ms ease !important;
    transform: scale(1) !important;
}

a:hover {
    /*transition-duration: 1000ms!important;*/
    transform: scale(1.3) perspective(1px) !important;
}

</style>
