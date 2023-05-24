<template>
    <section>
        <div class="container">
            <div class="row d-flex justify-content-center products-select-row ">
                <select class="form-select w-25 m-5 country-select-products"
                        aria-label="Default select example">
                    <option selected value="0">All Countries</option>
                    <option v-for="product in products"
                            :key="product.countryName"
                            :value="product.countryName">{{ product.countryName }}</option>

                </select>
                <select class="form-select w-25 m-5 bloodgroup-select-products"
                        aria-label="Default select example">
                    <option selected value="0">All Bloodgroups</option>
                    <option v-for="product in products"
                            :key="product.bloodgroupType"
                            :value="product.bloodgroupType">{{ product.bloodgroupType }}</option>
                </select>
                <div class="row mt-5 px-0">
                    <div class="col-12">
                        <div class="row product-card-row ">
                            <div v-for="product in products" :value="product.productId"
                                 class="card col-2 me-5 mt-5 product-card" style="width: 17rem;">
                                <img src="" class="card-img-top" alt="...">
                                <div class="card-body d-block">
                                    <h5 class="card-title">{{ }}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk
                                        of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import router from "@/router";
import {useRoute} from "vue-router";

export default {
    name: "ProductView",
    data() {
        return {
            productsSearchRequest: {
                buyerId: Number(sessionStorage.getItem('userId')),
                categoryId: Number(useRoute().query.categoryId),
                countryId: 0,
                bloodgroupId: 0
            },
            products: [
                {
                    productId: 0,
                    productAge: 0,
                    productDescription: '',
                    productAvailableAt: '',
                    productPrice: 0,
                    countryName: '',
                    genderName: '',
                    bloodgroupType: '',
                    imageData: '',
                    isInFavourites: true
                }
            ]

        }
    },
    methods: {
        getProducts: function () {
            this.$http.post("/store/products", this.productsSearchRequest
            ).then(response => {
                this.products = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },

    },
    mounted() {
        this.getProducts()
    }
}
</script>

<style scoped>


input {
    background-color: transparent !important;
    color: whitesmoke;
}

.products-select-row {
    position: relative;
    right: 2%;
}

.product-card-row {
    position: relative;
    left: 3.5%;
}

.country-select-products {
    background-color: transparent !important;
    color: white;
}

.bloodgroup-select-products {
    background-color: transparent !important;
    color: white;
}

.product-card {
    background-color: transparent;
    color: white;
    border-color: #660000;
    border-radius: 30px;
}

input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 10px #660000 !important;
}

</style>