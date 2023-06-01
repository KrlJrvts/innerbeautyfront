<template>
    <section>
        <div class="container store-container">
            <div class="row store-view-row gx-5 ">
                <div v-for="category in categories" :key="category.categoryId" :value="category.categoryId"
                     class="col mb-5">
                    <div @click="navigateToCategory(category.categoryId)" class="card store-card bg-transparent" >
                        <img :src="getCategoryImage(category)" class="store-card-image" draggable="false" >
                        <div class="card-body store-card-body">
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
            this.$http.get("/products/categories")
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

        },
        navigateToCategory(categoryId) {
            router.push({name: 'productsRoute', query: {categoryId: categoryId}})

        },
    },
    beforeMount() {
        this.getCategories()
    }

}

</script>
