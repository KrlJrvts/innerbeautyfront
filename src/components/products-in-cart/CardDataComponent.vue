<template>
    <div class="container text-center card-padding">
        <div class="row h-25">
            <div class="col">
                Country:
            </div>
            <div class="col">
                Product age
            </div>
            <div class="col">
                Price
            </div>
        </div>
        <div class="row h-25">
            <div class="col-4">
                Remove date
            </div>
            <div class="col-4">
                Bloodgroup
            </div>
        </div>
        <div class="row" style="height: 10vh; position: relative;">
            <div class="col-8">
                Description
            </div>
            <div class="col-4 d-flex align-items-end justify-content-center" style="position: absolute; bottom: 0; right: 0;">
                Seller
            </div>
        </div>
    </div>
</template>
<script>
import router from "@/router";

export default {
    name: 'CardDataComponent',
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