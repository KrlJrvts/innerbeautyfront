<template>
    <section id="cart">
    <div class="container text-center">
        <div class="row">
            <div class="col-8">
                <ProductCartComponent/>
            </div>
            <div class="col-3">
                Colum
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


section {
    color:whitesmoke;
}

.container {
    position: relative;
    top: 15%;
    height: 10%;
    width: 100%;
}

</style>