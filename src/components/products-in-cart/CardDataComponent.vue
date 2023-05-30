<template>
    <div  class="container text-start card-padding">
        <div class="row h-25">
            <div class="col">
                Country: {{product.countryName}}
            </div>
            <div class="col">
                Product age: {{product.productAge}}
            </div>
            <div class="col">
                Price: {{product.productPrice}}
            </div>
        </div>
        <div class="row h-25">
            <div class="col-4">
                Remove date: {{product.productAvailableAt}}
            </div>
            <div class="col-4">
                Bloodgroup: {{product.bloodgroupType}}
            </div>
        </div>
        <div class="row" style="height: 10vh; position: relative;">
            <div class="col-8">
                Description: {{product.productDescription}}
            </div>
            <div class="col-4 d-flex align-items-end justify-content-center" style="position: absolute; bottom: 0; right: 0;">
                Seller: {{product.sellerEmail}}
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: 'CardDataComponent',
    props: {
        product:{
            type: Object,
            required: true
            }

    }
}
</script>
<style scoped>


section {
    color: whitesmoke;
}

.container {
    position: relative;
    top: 15%;
    height: 10%;
    width: 100%;
}
.card-padding {
    padding: 0 !important;
    margin: 0 !important;
}

</style>