<template>
    <div class="card mb-3 cart-product">
        <div class="row g-0 product-data-component d-flex align-items-center" style="height: 300px">
            <h1>It looks like your product cart is as empty as a vacuum cleaner in space. Time to fill it up with
                amazing products!</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductCartEmptyComponent'
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

.product-data-component {

    border-style: solid;
    border-width: 1px;
    border-color: rgb(255, 0, 0, .4);
    background: rgba(0, 0, 0, .5);
}
</style>