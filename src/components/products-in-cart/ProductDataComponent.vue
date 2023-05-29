<template>
    <tbody>
    <tr v-for="favoriteProduct in favoriteProducts" :value="favoriteProduct.productId" class="pb-3"
        style="height: 200px;">
        <div class="container py-2 mb-4 product-data-component">
            <div class="row ps-0">
                <div class="col-3 d-flex align-items-center">
                    <img v-if="favoriteProduct.imageData == ''" src="../../assets/accountpictures/thebox.jpeg"
                         style="height: 200px; width: 200px;border-radius: 20px">
                    <img v-else :src="favoriteProduct.imageData"
                         style="height: 200px; width: 200px;border-radius: 20px">
                </div>
                <div class="col">
                    <div class="row d-flex justify-content-center">
                        <h3>{{ favoriteProduct.productName }}</h3>
                        <div class="row mt-4">
                            <div class="col d-flex justify-content-start ps-0">
                                <p>Country: {{ favoriteProduct.countryName }} </p>
                            </div>
                            <div class="col d-flex justify-content-center ">
                                <p>Product age: {{ favoriteProduct.productAge }} Years</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col d-flex justify-content-start ps-0">
                                <p>Removal date: {{ favoriteProduct.productAvailableAt }}</p>
                            </div>

                            <div class="col d-flex justify-content-center">
                                <p>Blood group: {{ favoriteProduct.bloodgroupType }}</p>
                            </div>
                        </div>
                        <div class="row h-25" style="height: 20px">
                            <div class="col d-flex justify-content-center">
                                <p>Description:</p>
                            </div>
                        </div>
                        <div class="col-12 d-flex justify-content-start description-box" style="height: 100px">
                            <p>{{ favoriteProduct.productDescription }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-2 p-0 d-flex justify-content-start align-items-center">
                    Price:<span class="price-span ms-1">{{ favoriteProduct.productPrice }}$</span>
                </div>
                <div class="col-1 button-column ">
                    <div>
                        <a class="button-cart-remove"><i class="fa-solid fa-xmark fa-3x mt-5 mb-5"></i></a>
                    </div>
                    <div>
                        <i class="fa-solid fa-cart-shopping fa-2x button-cart-buy"></i>
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
    name: 'ProductDataComponent',
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
                    productAvailableAt: ''
                }
            ]

        }
    },
    methods: {
        getCartProducts: function () {
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
    },
    beforeMount() {
        this.getCartProducts()
    }
}


</script>
<style scoped>

.price-span {
    font-size: 20px;
    color: #FF0000;
    padding: 10px;
}

.price-span:hover {
    transform: rotate(360deg);
    transition-duration: 2s;
}

.button-cart-remove {
    color: #660000;

}

.button-cart-remove:hover i {
    cursor: pointer;
    color: #FF0000;
    transform: scale(1.2);
    transition: all 400ms ease-in-out;
}

.button-cart-buy {
    color: #660000;
}

.button-cart-buy:hover {
    cursor: pointer;
    color: #FF0000;
    transform: scale(1.2);
    transition: all 400ms ease-in-out;
}

.description-box {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
}

.button-column {
    margin-top: 20px;
}

.product-data-component {

    border-style: solid;
    border-width: 1px;
    border-color: rgb(255, 0, 0,.4);
    background: rgba(0, 0, 0, .5);
}
</style>