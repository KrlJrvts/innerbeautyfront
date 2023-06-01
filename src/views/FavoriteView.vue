<template>
    <section id="favorite-view">
        <div class="d-flex justify-content-center col-12">
            <table class="favorite-table">
                <thead>
                <tr class="header-row ">
                    <th scope="col" colspan="4" style="font-size: 40px; border-color: transparent">Favorite products</th>
                </tr>
                </thead>
                <ProductFavoriteComponent/>
            </table>
        </div>
    </section>
</template>

<script>


import ProductFavoriteComponent from "@/components/products-in-cart/ProductFavoriteComponent.vue";

export default {
    name: "FavoriteView",
    components: {ProductFavoriteComponent},

}
</script>
