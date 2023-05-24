<template>
    <section>
        <div class="container products-container">
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
                                <img :src="product.imageData" class="card-img-top product-card-image" draggable="false">
                                <div class="card-body d-block pt-2 product-card-body">
                                    <h5 class="card-title">{{ categoryNameGenerator() }}</h5>
                                    <p class="card-text">Removing date: {{product.productAvailableAt}}</p>
                                    <p class="card-text">Previous owner age: {{product.productAge}}</p>
                                    <p class="card-text">Gender: {{product.genderName}}</p>
                                    <hr class="product-card-separator">
                                    <a class="btn button-product-favorite"><i class="fa-regular fa-heart fa-2xl me-5"></i></a>
                                    <a class="btn button-product-cart"><i class="fa-solid fa-basket-shopping fa-2xl"></i></a>
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
import {onMounted} from "vue";

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
        onMounted,
        getProducts() {
            this.$http.post("/store/products", this.productsSearchRequest
            ).then(response => {
                this.products = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
        categoryNameGenerator() {
            let category = Number(useRoute().query.categoryId)

            switch (category) {
                case 1:
                    return 'Kidney';
                case 2:
                    return 'Heart';
                case 3:
                    return 'Lungs';
                case 4:
                    return 'Liver';
            }

        }
    },
    mounted() {
        this.getProducts()
    }
};
</script>

<style scoped>



.products-container {

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
    border-radius: 20px!important;
    padding: 0px;
}

.product-card:hover .product-card-image {
    opacity: 1!important;
    transition-duration: 600ms;
}

.product-card-image {
    border-radius: 20px 20px 0px 0 !important;
    opacity: 0.5!important;
}

.product-card-body {
    background: rgba(20, 0, 0, .2)!important;
}
.product-card-separator {
    border-style: dotted;
    border-width: 0 0 2px;
    color: rgba(255, 0, 0, 0.6);
}

.button-product-favorite {
    padding: 12px!important;
    color: #660000;
}

.button-product-favorite:hover {
    color: #FF0000;
    scale: 1.1;
    transition:all 400ms ease-in-out!important;

}

.button-product-cart {
    padding: 12px!important;
    color: #660000;
}

.button-product-cart:hover {
    color: #FF0000;
    scale: 1.1;
    transition:all 400ms ease-in-out!important;
}

input {
    background-color: transparent !important;
    color: whitesmoke;
}
input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 10px #660000 !important;
}

</style>