<template>
    <section>
        <div class="container store-container">
            <div class="row store-view-row gx-5">
                <div v-for="category in categories" :key="category.categoryId" :value="category.categoryId" class="col-3">
                    <div class="card store-card bg-transparent" style="width: 100%; height: 100%;">
                        <img src="https://www.miffy.com/assets/img/icons/og-image-200x200.png" class="card-img-top" >
                        <div class="card-body store-card-body bg-dark">
                            <h2 class="card-text">{{category.categoryName}}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {get} from "axios";
import router from "@/router";

export default {
    name: "StoreView",
    data() {
        return {
            categories: [
                {
                    "categoryId": 0,
                    "categoryName": ''
                },
            ]

        }

    },
    methods: {

            getCategories: function () {
                this.$http.get("/store")
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(()=> router.push({name: 'errorRoute'}))
        }

    },
    beforeMount() {
        this.getCategories()
    }
}

</script>

<style scoped>
.store-view-row {
    color: white;
    margin: 0;
}
.card-body {
    color: white;
}
.store-container {
    position: relative;
    top: 200px;
}
.store-card {
    border-style: solid!important;
    border-width: 2px!important;
    border-color: #660000;
}
.store-card-body {
    border-color: #1d1d1d!important;
    background: rgba(0, 0, 0, .3)!important;
}

</style>