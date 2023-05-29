<template>
    <section id="cart">
        <div class="container cart-container text-center">
            <div class="row">
                <div class="col-8">
                    <ProductCartComponent/>
                </div>
                <div class="col-3">
                    <div class="card border-dark cart-product" style="max-width: 20rem;">
                        <div class="card-body">
                            <div class="container text-center">
                                <div class="row">
                                    <div class="col">
                                        <button @click="" class="btn btn-outline-light button-checkout mb-5">Check out</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        Column
                                    </div>
                                    <div class="col">
                                        Column
                                    </div>
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
import ProductCartComponent from "@/components/products-in-cart/ProductCartComponent.vue";

export default {
    name: "CartView",
    components: {ProductCartComponent}
}
</script>

<style scoped>

#cart {
    min-height: 100vh;
    height: fit-content;
}
.cart-container {
    background-image: url("@/assets/grunge-black-concrete-textured-background.jpg");
    height: fit-content;
}
section {
    color: whitesmoke;
}

.container {
    position: relative;
    top: 15%;
    height: 10%;
    width: 100%;
}

.cart-product {
    background: transparent;
    color: white;
    border-style: solid !important;
    border-color: #660000 !important;
}

.button-checkout:hover {
    background-color: #660000 !important;
    color: white !important;
    transition: all 700ms ease !important;
    transform: scale(1.1) !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 10px #660000;
}
</style>