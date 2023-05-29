<template>
    <section id="favorite-view">
        <div class="d-flex justify-content-center col-12 favorite-table">
            <table class="table" style="width: 900px">
                <thead>
                <tr class="header-row">
                    <th scope="col" colspan="4" style="font-size: 30px; border-color: transparent">Favorite products</th>
                </tr>
                </thead>
                <ProductDataComponent/>
            </table>
        </div>
    </section>
</template>

<script>
import ProductDataComponent from "@/components/products-in-cart/ProductDataComponent.vue";

export default {
    name: "FavoriteView",
    components: {ProductDataComponent},

}
</script>

<style scoped>

table {
    color: white !important;
}
#favorite-view {
    min-height: 100vh;
    height: max-content;
}
</style>