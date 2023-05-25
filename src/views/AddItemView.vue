<template>
    <section id="Add-item">
        <div class="container add-item-container text-center">
            <div class="row d-flex justify-content-center products-select-row">
                <div class="col col-3 mt-5">
                    <div class="mb-3">
                        <ProductGroupDropdown/>
                    </div>
                    <div class="mb-3">
                        <CountryDropdown @event-emit-selected-country-id ="setProductCountryId"/>
                    </div>
                    <div class="mb-3">
                        <BloodGroupDropdown/>
                    </div>
                    <div class="mb-3">
                        <GenderDropdown/>
                    </div>
<!--                    <div class="mb-3">-->
<!--                        <input v-model="productAge" type="text" class="form-control" placeholder="Age">-->
<!--                    </div>-->
<!--                    <div class="mb-3">-->
<!--                        <input v-model="productAvailableAt" type="text" class="form-control" placeholder="Date">-->
<!--                    </div>-->
<!--                    <div class="mb-3">-->
<!--                        <input v-model="productPrice" type="text" class="form-control" placeholder="Price">-->
<!--                    </div>-->

                    <button @click="" type="submit" class="btn btn-outline-light button-homepage account-button m-3">
                        Cancel
                    </button>
                    <button @click="" type="submit" class="btn btn-outline-light button-homepage account-button mt">Save
                        changes
                    </button>
                </div>
                <div class="col col-3 mt-5">
                    <div class="row">
                        <div class="col">
                            <img src="../assets/accountpictures/HoodedFigure.jpeg" class="img-thumbnail account-image"
                                 style="width: 200px; height: 225px;">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center products-select-row">
                        <div class="col mt-3">
<!--                            <div class="mb-3 ms-5">-->
<!--                                <input v-model="productDescription" type="text" class="col p-5 form-control"-->
<!--                                       placeholder="Description">-->
<!--                            </div>-->
                            <button @click="" type="submit"
                                    class="btn btn-outline-light button-homepage account-button mt-4">Choose
                                file
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>


import ProductGroupDropdown from "@/views/ProductGroupDropdown.vue";
import CountryDropdown from "@/views/CountryDropdown.vue";
import BloodGroupDropdown from "@/views/BloodGroupDropdown.vue";
import GenderDropdown from "@/views/GenderDropdown.vue";

export default {
    name: "AddItemView",
    components: {GenderDropdown, BloodGroupDropdown, CountryDropdown, ProductGroupDropdown},

    data() {
        return {
            newProduct: {
                productSellerId: 0,
                productCategoryId: 0,
                productCountryId: 0,
                productBloodgroupId: 0,
                productGenderId: 0,
                productAge: 0,
                productDescription: '',
                productAvailableAt: '',
                productPrice: 0,
                productImage: ''
            },
        }
    },
    methods: {

        addItem: function () {
            this.$http.post("/products/add", this.newProduct
            ).then(response => {
                const responseBody = response.data
            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },
        setProductCountryId(selectedCountryId) {
            this.newProduct.productCountryId = selectedCountryId
        },


    }
}
</script>

<style scoped>
section {
    color: black;
}

.add-item-container
input {
    background-color: transparent !important;
    color: whitesmoke;
}

input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 500px 10px #660000 !important;
}

button:hover {
    background-color: #660000 !important;
    color: white !important;
    transition: all 700ms ease !important;
    transform: scale(1.1) !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 10px #660000;
}

.account-button {
    font-size: 15px !important;
}

alert-div {
    position: relative;
    margin-top: 200px;
}

input[type="file"]::-webkit-file-upload-button {
    padding: 8px 16px; /* Adjust the padding as needed */
    font-size: 14px; /* Adjust the font size as needed */
    background-color: black; /* Customize the background color */
    color: white; /* Customize the text color */
    border-radius: 4px; /* Add border radius if desired */
    font-family: inherit;
}

.account-image {
    border-color: #660000 !important;
    border-style: solid;
    border-width: 2px;
    padding: 0;
}
</style>

