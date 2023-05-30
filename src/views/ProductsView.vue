<template xmlns="http://www.w3.org/1999/html">
    <section id="product-view">
        <div class="container register-alert-container">
            <div class="col">
                <AlertDanger :message="message"/>
            </div>
        </div>
        <div class="container products-container">
            <div class="row d-flex justify-content-center products-select-row ">
                <CountryDropdown ref="countryDropdownRef" @event-emit-selected-country-id="setProductCountryId"
                                 class="form-select w-25 m-5 country-select-products"/>
                <BloodGroupDropdown ref="bloodGroupDropdown"
                                    @event-emit-selected-blood-group-id="setProductBloodGroupId"
                                    class="form-select w-25 m-5 bloodgroup-select-products"/>
              <button @click="resetFilters" class="btn btn-outline-light button-search-products m-5 w-25">Reset Filters</button>
                <div class="row mt-5 px-0">
                    <div class="col-12">
                        <div class="row product-card-row ">
                            <div v-for="product in products" :value="product.productId"
                                 class="card col-2 me-5 mt-3 product-card" style="width: 17rem;">
                                <img v-if="product.imageData == ''" src="../assets/accountpictures/thebox.jpeg"
                                     class="card-img-top product-card-image" draggable="false"
                                     style="height: 200px; border-radius: 20px 20px 0px 0 ">
                                <img v-else :src="product.imageData" class="card-img-top product-card-image"
                                     draggable="false" style="height: 200px; border-radius: 20px 20px 0px 0 ">
                                <div class="card-body d-block pt-1 product-card-body">
                                    <h5 class="card-title mb-1">{{ product.categoryName }}</h5>
                                    <p class="card-text mb-1">Location: {{ product.countryName }}</p>
                                    <p class="card-text mb-1">Blood Group: {{ product.bloodgroupType }}</p>
                                    <p class="card-text mb-1">Removing date: {{ product.productAvailableAt }}</p>
                                    <p class="card-text mb-1">Previous owner age: {{ product.productAge }}</p>
                                    <p class="card-text mb-4">Gender: {{ product.genderName }}</p>
                                    <p class="card-text mb-1">Price:
                                        <span class="product-price">{{ product.productPrice }} € </span>
                                    </p>
                                    <hr class="product-card-separator">
                                    <a class="btn button-product-description"
                                       @click="openProductDescriptionModal(product.productDescription, product.productId,product.isInFavourites,product.status)">
                                        <i class="fa-solid fa-info fa-2xl m-3 "></i></a>

                                    <a v-if="product.isInFavourites == false" class="btn button-product-favorite"
                                       @click="addToFavorites(product.productId)">
                                        <i class="fa-regular fa-heart fa-2xl m-3"></i></a>
                                    <a v-else-if="product.isInFavourites == true" class="btn button-product-favorite"
                                       @click="removeFromFavorites(product.productId)">
                                        <i class="fa-solid fa-heart-circle-check fa-2xl m-3"></i></a>

                                    <a v-if="product.status == 'A'" class="btn button-product-cart"
                                       @click="addToCart(product.productId)">
                                        <i class="fa-solid fa-basket-shopping fa-2xl ms-2"></i></a>
                                    <a v-else-if="product.status == 'C'" class="btn button-product-cart">
                                        <i class="fa-solid fa-check fa-2xl ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductDescription
                        ref="descriptionModal"
                        :product-description="selectedProductDescription"
                        :cart-status="cartStatus"
                        @event-add-to-cart="addToCart"
                        @event-add-to-favorites="addToFavorites"
                        @event-remove-from-favorites="removeFromFavorites"/>

            </div>
        </div>
    </section>
    <section id="product-view-second">

    </section>
</template>

<script>
import router from "@/router";
import {useRoute} from "vue-router";
import CountryDropdown from "@/components/dropdowns/CountryDropdown.vue";
import BloodGroupDropdown from "@/components/dropdowns/BloodGroupDropdown.vue";
import ProductDescription from "@/components/Modals/ProductDescription.vue";
import AlertDanger from "@/components/AlertDanger.vue";

export default {
    name: "ProductView",
    components: {AlertDanger, ProductDescription, BloodGroupDropdown, CountryDropdown},
    data() {
        return {
            message: '',
            selectedProductDescription: '',
            selectedBloodGroupId: 0,
            selectedCountryId: 0,
            cartStatus: '',
            productsSearchRequest: {
                buyerId: Number(sessionStorage.getItem('userId')),
                categoryId: Number(useRoute().query.categoryId),
                countryId: 0,
                bloodgroupId: 0
            },
            products: [
                {
                    categoryName: '',
                    productId: 0,
                    productAge: 0,
                    productDescription: '',
                    productAvailableAt: '',
                    productPrice: 0,
                    countryName: '',
                    countryId: 0,
                    genderName: '',
                    bloodgroupType: '',
                    bloodgroupTypeId: 0,
                    imageData: '',
                    isInFavourites: true,
                    status: '',
                }
            ],
            cartProduct: {
                buyerId: Number(sessionStorage.getItem('userId')),
                productId: 0,
            },
            favoriteProduct: {
                buyerId: Number(sessionStorage.getItem('userId')),
                productId: 0,
            },
            errorResponse: {
                message: '',
                errorCode: 0

            }
        }
    },

    methods: {

        addToCart(productId) {
            this.cartProduct.productId = productId;
            this.addProductToCart();
            this.clearMessage();
        },

        addToFavorites(productId) {
            this.favoriteProduct.productId = productId;
            this.addOrRemoveProductToFavorite()
            this.message = 'Product successfully added to favorites'
            this.clearMessage()
        },

        removeFromFavorites(productId) {
            this.favoriteProduct.productId = productId;
            this.addOrRemoveProductToFavorite()
            this.message = 'Product successfully removed from favorites'
            this.clearMessage()
        },

        clearMessage() {
            setTimeout(() => {
                this.message = '';
                window.location.reload()
            }, 1500);
        },
        openProductDescriptionModal(productDescription, productId, isInFavorites, status) {
            this.selectedProductDescription = productDescription;
            this.cartStatus = status,
                this.$refs.descriptionModal.openModal(productId, isInFavorites, status);

        },
        setProductCountryId(selectedCountryId) {
            this.productsSearchRequest.countryId = selectedCountryId;
            this.getProducts()
        },
        setProductBloodGroupId(selectedBloodGroupId) {
            this.productsSearchRequest.bloodgroupId = selectedBloodGroupId;
            this.getProducts()
        },

        addProductToCart() {
            this.$http.patch("/products/cart-add", null, {
                    params: {
                        buyerId: this.cartProduct.buyerId,
                        productId: this.cartProduct.productId
                    }
                }
            ).then(response => {
                if (response.status === 200) {
                    this.message = 'Product is successfully added to cart!'
                }
            }).catch(error => {
                this.errorResponse = error.response.data
            })
        },

        addOrRemoveProductToFavorite() {
            this.$http.patch("/products/favorite-add", null, {
                    params: {
                        buyerId: this.favoriteProduct.buyerId,
                        productId: this.favoriteProduct.productId
                    }
                }
            ).then(response => {

            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },


        getProducts() {
            this.$http.post("/products/category-all", this.productsSearchRequest
            ).then(response => {
                this.products = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
      resetFilters() {
            this.$refs.countryDropdownRef.setFirstCountrySelected();
            this.$refs.bloodGroupDropdown.setFirstBloodGroupSelected();
        }
    },
    beforeMount() {
        this.$nextTick(() => {
            this.$refs.countryDropdownRef.setFirstOptionName('All Countries');
            this.$refs.bloodGroupDropdown.setFirstOptionName('All Blood Groups')
        });
    },
    mounted() {
        this.getProducts()
    }

}

</script>

<style scoped>

#product-view {
    height: 100vh;

}

#product-view-second {
    background-image: url("../assets/grunge-black-concrete-textured-background.jpg");

}


.products-select-row {
    position: relative;
    right: 1%;
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
    border-radius: 20px !important;
    padding: 0px;
}

.product-card:hover {
    border-color: #FF0000;
    scale: 1.05;
    transition-duration: 600ms;
}

.product-card:hover .product-card-image {
    opacity: 1 !important;
    transition-duration: 600ms;

}

.product-card-image {
    border-radius: 20px 20px 0px 0 !important;
    opacity: 0.5 !important;
}

.product-card-body {
    background: rgba(0, 0, 0, .5);
    border-radius: 20px !important;
}

.product-card-separator {
    border-style: dotted;
    border-width: 0 0 2px;
    color: rgba(255, 0, 0, 0.6);
}

.button-product-description {
    padding: 12px !important;
    color: #660000;
}

.button-product-description:hover {
    color: #FF0000;
    scale: 1.1;
    transition: all 400ms ease-in-out !important;
}

.button-product-favorite {
    padding: 12px !important;
    color: #660000;
}

.button-product-favorite:hover {
    color: #FF0000;
    scale: 1.1;
    transition: all 400ms ease-in-out !important;

}

.button-product-cart {
    padding: 12px !important;
    color: #660000;
}

.button-product-cart:hover {
    color: #FF0000;
    scale: 1.1;
    transition: all 400ms ease-in-out !important;
}

.product-price {
    font-size: 25px;
    color: red;
}

</style>