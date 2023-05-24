<template>
    <section>
        <div class="container">
            <div class="row d-flex justify-content-center products-select-row">
                <select class="form-select w-25 m-3 country-select-products"
                        aria-label="Default select example">
                    <option selected>All Countries</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select w-25 m-3 bloodgroup-select-products"
                        aria-label="Default select example">
                    <option selected>All Bloodgroups</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div class="row mt-5 px-0">
                    <div class="col-12">
                        <div class="row product-card-row ">
                            <div class="card col-2 me-5 mt-5" style="width: 17rem;">
                                <img src="" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk
                                        of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!--        <div class="container-fluid content-container-product ">-->
        <!--            <div class="row">-->
        <!--                <div class="col-4 mt-5 pl-0 pe-0">-->
        <!--                    <div class="d-flex">-->
        <!--                        <select class="form-select w-50 m-3 country-select-products"-->
        <!--                                aria-label="Default select example">-->
        <!--                            <option selected>All Countries</option>-->
        <!--                            <option value="1">One</option>-->
        <!--                            <option value="2">Two</option>-->
        <!--                            <option value="3">Three</option>-->
        <!--                        </select>-->
        <!--                        <select class="col col-3 form-select w-50 m-3 bloodgroup-select-products"-->
        <!--                                aria-label="Default select example">-->
        <!--                            <option selected>All Bloodgroups</option>-->
        <!--                            <option value="1">One</option>-->
        <!--                            <option value="2">Two</option>-->
        <!--                            <option value="3">Three</option>-->
        <!--                        </select>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div>-->
        <!--                <div class="col-2 mt-5 pl-0">-->
        <!--                    <div class="card" style="width: 18rem;">-->
        <!--                        <img src="" class="card-img-top" alt="...">-->
        <!--                        <div class="card-body">-->
        <!--                            <h5 class="card-title">Card title</h5>-->
        <!--                            <p class="card-text">Some quick example text to build on the card title and make up the bulk-->
        <!--                                of the card's content.</p>-->
        <!--                            <a href="#" class="btn btn-primary">Go somewhere</a>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
    </section>
</template>

<script>
export default {
    name: "ProductView"
}
</script>

<style scoped>


input {
    background-color: transparent !important;
    /*background-color: grey;*/
    color: whitesmoke;
}
.products-select-row {
    position: relative;
    right: 2%;
}
.product-card-row{
    position: relative;
    left: 3.5%;
}
.country-select-products {
    background-color: transparent!important;
    color: white;
}

.bloodgroup-select-products {
    background-color: transparent!important;
    color: white;
}

.account-button {
    font-size: 15px !important;
}

input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 10px #660000 !important;
}

</style>