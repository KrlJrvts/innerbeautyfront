<template>
    <section>
        <div class="container content-container-product ">
                <div class="row w-100 gx-5">
                    <div class="col col-3 mt-5 d-flex justify-content-start position-absolute start-0 ">
                        <select class="form-select w-75 m-3" aria-label="Default select example">
                            <option selected>All Countries</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select w-75 m-3" aria-label="Default select example">
                            <option selected>All Bloodgroups</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-9 mt-5">
                        Column
                    </div>
                </div>
















<!--            <div class="row">-->
<!--                <div class="col-2 mt-5 d-flex justify-content-start">-->
<!--                    <select class="form-select w-75" aria-label="Default select example">-->
<!--                        <option selected>Open this select menu</option>-->
<!--                        <option value="1">One</option>-->
<!--                        <option value="2">Two</option>-->
<!--                        <option value="3">Three</option>-->
<!--                    </select>-->
<!--                </div>-->
<!--                <div class="col-2 mt-5 d-flex justify-content-start">-->
<!--                    <select class="form-select w-75" aria-label="Default select example">-->
<!--                        <option selected>Open this select menu</option>-->
<!--                        <option value="1">One</option>-->
<!--                        <option value="2">Two</option>-->
<!--                        <option value="3">Three</option>-->
<!--                    </select>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--                <div class="col-9 mt-5 d-flex justify-content-start">-->
<!--                    Columnsdadsa-->
<!--                </div>-->
<!--            </div>-->
        </div>
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

.account-button {
    font-size: 15px !important;
}

input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 10px #660000 !important;
}

</style>