<template>
    <tbody>
    <tr v-for="product in favoriteProducts" :value="product.productId" :key="product.productId" class="pb-3"
        style="height: 200px;">
        <div class="container py-2 mb-4 product-data-component">
            <div class="row ps-0">
                <div class="col-3 d-flex align-items-center">
                    <AddItemImage :picture-data-base64="product.imageData" style="height: 200px; width: 200px;"/>
                </div>
                <div class="col">
                    <div class="row d-flex justify-content-center">
                        <h3>{{ product.productName }}</h3>
                        <div class="row mt-4">
                            <div class="col d-flex justify-content-start ps-0">
                                <p>Country: {{ product.countryName }} </p>
                            </div>
                            <div class="col d-flex justify-content-center ">
                                <p>Product age: {{ product.productAge }} Years</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col d-flex justify-content-start ps-0">
                                <p>Removal date: {{ product.productAvailableAt }}</p>
                            </div>
                            <div class="col d-flex justify-content-center ps-0">
                                <p>Blood group: {{ product.bloodgroupType }}</p>
                            </div>
                        </div>
                        <div class="row h-25" style="height: 20px">
                            <div class="col d-flex justify-content-start ps-0">
                                <p>Gender: {{ product.genderName }} </p>
                            </div>
                        </div>
                        <div class="row h-25" style="height: 20px">
                            <div class="col d-flex justify-content-center">
                                <p>Description:</p>
                            </div>
                        </div>
                        <div class="col-12 d-flex justify-content-start description-box" style="height: 100px">
                            <p>{{ product.productDescription }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-2 p-0 d-flex justify-content-start align-items-center">
                    Price:<span class="price-span">{{ product.productPrice }}€</span>
                </div>
                <div class="col-1 button-column ">
                    <div>
                        <a @click="removeProduct(product.productId)" class="button-cart-remove"><i
                                class="fa-solid fa-heart-circle-minus fa-2x mt-5 mb-5"></i></a>
                    </div>
                    <div>
                        <i @click="addFavoriteProductToCart(product.productId)" v-if="product.status == 'A'"
                           class="fa-solid fa-cart-shopping fa-2x button-cart-buy mt-5"></i>
                        <i v-else-if="product.status == 'C'" class="fa-solid fa-check fa-3x button-checked mt-4"></i>
                    </div>
                </div>
            </div>
        </div>
    </tr>
    </tbody>
</template>
<script>
import AddItemImage from "@/components/Image/AddItemImage.vue"
import router from "@/router";

export default {
    name: 'ProductFavoriteComponent',
    components: {AddItemImage},
    data() {
        return {
            favoriteProducts: [
                {
                    productId: 0,
                    productName: '',
                    productAge: 0,
                    productDescription: '',
                    productPrice: 0,
                    countryName: '',
                    genderName: '',
                    bloodgroupType: '',
                    imageData: '',
                    productAvailableAt: '',
                    status: ''
                }
            ],
            removedFavoriteProduct: {
                buyerId: Number(sessionStorage.getItem('userId')),
                productId: 0,
            },


        }
    },
    methods: {
        addFavoriteProductToCart(productId) {
            this.$http.patch("/products/cart-add", null, {
                    params: {
                        buyerId: Number(sessionStorage.getItem('userId')),
                        productId: Number(productId)
                    }
                }
            ).then(response => {
                this.getCartProducts();
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
        getCartProducts() {
            this.$http.get("/products/favorite", {
                    params: {
                        buyerId: Number(sessionStorage.getItem('userId')),
                    }
                }
            ).then(response => {
                    this.favoriteProducts = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
        removeProduct(productId) {
            this.removedFavoriteProduct.productId = productId;
            this.removeProductFromFavorite();

        },
        removeProductFromFavorite() {
            this.$http.patch("/products/favorite-add", null, {
                    params: {
                        buyerId: this.removedFavoriteProduct.buyerId,
                        productId: this.removedFavoriteProduct.productId
                    }
                }
            ).then(response => {
                this.getCartProducts()
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
    },
    beforeMount() {
        this.getCartProducts()
    }
}


</script>
<style scoped>
.product-data-component {
    border-radius: 30px;
}

.price-span {
    font-size: 20px;
    color: #FF0000;
    padding: 10px;
}

.button-cart-remove {
    color: #660000;

}

.button-cart-remove:hover i {
    cursor: pointer;
    color: #FF0000;
    transform: scale(1.2);
    transition: all 300ms ease-in-out;
}

.button-cart-buy {
    color: #660000;
}

.button-checked {
    color: #FF0000;
}

.button-cart-buy:hover {
    cursor: pointer;
    color: #FF0000;
    transform: scale(1.2);
    transition: all 300ms ease-in-out;
}

.description-box {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
}

.button-column {
    margin-top: 30px !important;
}

.product-data-component {

    border-style: solid;
    border-width: 1px;
    border-color: rgb(255, 0, 0, .4);
    background: rgba(0, 0, 0, .5);
}
</style>