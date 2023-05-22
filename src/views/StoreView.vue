<template>
    <section>
        <div class="container store-container">
            <div class="row store-view-row gx-5 ">
                <div v-for="category in categories" :key="category.categoryId" :value="category.categoryId"
                     class="col-3 ">
                    <div class="card store-card bg-transparent" style="width: 100%; height: 100%;">
                        <img :src="getCategoryImage(category)" class="store-card-image" draggable="false" >
                        <div class="card-body store-card-body bg-dark">
                            <h2 class="card-text">{{ category.categoryName }}</h2>
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
                .catch(() => router.push({name: 'errorRoute'}))
        },
        getCategoryImage(category) {
            switch (category.categoryId) {
                case 1:
                    return require("../assets/categoryphotos/kidney.jpg");
                case 2:
                    return require("../assets/categoryphotos/hearth.jpg");
                case 3:
                    return require("../assets/categoryphotos/lungs.jpg");
                case 4:
                    return require("../assets/categoryphotos/liver.jpg");
            }

        }
    },
    beforeMount() {
        this.getCategories()
    }

}

</script>

<style scoped>


.card-body {
    color: white;
}

.store-container {
    position: relative;
    top: 20%;
}

.store-card {
    border-style: solid !important;
    border-width: 2px !important;
    border-color: #660000;
    transform: scale(1);
}
.store-card:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 900ms;
}


.store-card-body {
    border-color: #1d1d1d !important;
    background: rgba(0, 0, 0, .7) !important;

}

.store-card-image {
    height: 250px;
    width: 100%;

}


</style>