<template>
    <div class="card mb-3 cart-product" style="max-width: 800px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="../../assets/cartpictures/HumanOrgansBox.jpeg" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-body card-padding">
                    <h5 class="card-title">Card title</h5>
                    <div class="card-body">
                        <CardDataComponent/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CardDataComponent from "@/components/products-in-cart/CardDataComponent.vue";

export default {
    name: 'ProductCartComponent',
    components: {CardDataComponent}
}
</script>
<style scoped>


section {
    color: whitesmoke;
}

.cart-product {
    background: transparent;
    color: white;
    border-style: solid;
    border-color: #660000;
}
.card-padding {
    padding: 0 !important;
    margin: 0 !important;
}

</style>