<template>
    <tbody>
    <tr class="pb-3"
        style="height: 200px;">
        <div class="container py-2 mb-4 product-data-component">
            <div class="row ps-0 d-flex align-items-center" style="height: 300px">
                <h1>No Products Listed In Favorites </h1>
            </div>
        </div>
    </tr>
    </tbody>
</template>
<script>
export default {
    name: 'ProductFavoriteEmptyComponent'
}
</script>
<style scoped>
.product-data-component {
    border-radius: 30px;
}

.button-cart-remove:hover i {
    cursor: pointer;
    color: #FF0000;
    transform: scale(1.2);
    transition: all 300ms ease-in-out;
}

.product-data-component {

    border-style: solid;
    border-width: 1px;
    border-color: rgb(255, 0, 0, .4);
    background: rgba(0, 0, 0, .5);
}
</style>