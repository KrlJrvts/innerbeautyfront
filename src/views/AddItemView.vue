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
                        <BloodGroupDropdown @event-emit-selected-blood-group-id ="setProductBloodGroupId"/>
                    </div>
                    <div class="mb-0">
                        <GenderDropdown @event-emit-selected-category-id = "setProductGroupId"/>
                    </div>
                    <div class="mb-3 mt-0 pt-0">
                        <small>Enter Removal Date</small>
                        <input v-model="newProduct.productAvailableAt" type="date" class="form-control" placeholder="Removal date">
                    </div>
                    <div class="mb-3">
                        <input v-model="newProduct.productAge" type="number" class="form-control" placeholder="Organ Owner Age">
                    </div>

                    <div class="mb-3">
                        <input v-model="newProduct.productPrice" type="number" class="form-control" placeholder="Price">
                    </div>

                    <button @click="cancelSelected" type="submit" class="btn btn-outline-light button-homepage account-button m-3">
                        Cancel
                    </button>
                    <button @click="" type="submit" class="btn btn-outline-light button-homepage account-button mt">Save
                        changes
                    </button>
                </div>
                <div class="col col-3 mt-5">
                    <div class="row">
                        <div class="col mb-0">
                            <img src="../assets/accountpictures/HoodedFigure.jpeg" class="img-thumbnail account-image"
                                 style="width: 200px; height: 225px;">
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center products-select-row">
                        <div class="col mt-3">
                            <div class="form-floating">
                                <textarea class="form-control add-item-textarea" placeholder="Product Description..." id="floatingTextarea" style="height: 135px"></textarea>
                            </div>
                            <button @click="test" type="submit"
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


import ProductGroupDropdown from "@/components/dropdowns/ProductGroupDropdown.vue";
import CountryDropdown from "@/components/dropdowns/CountryDropdown.vue";
import BloodGroupDropdown from "@/components/dropdowns/BloodGroupDropdown.vue";
import GenderDropdown from "@/components/dropdowns/GenderDropdown.vue";
import router from "@/router";

export default {
    name: "AddItemView",
    components: {GenderDropdown, BloodGroupDropdown, CountryDropdown, ProductGroupDropdown},

    data() {
        return {
            newProduct: {
                productSellerId: sessionStorage.getItem('userId'),
                productCategoryId: 0,
                productCountryId: 0,
                productBloodgroupId: 0,
                productGenderId: 0,
                productAge: '',
                productDescription: '',
                productAvailableAt: '',
                productPrice: '',
                productImage: ''
            },
        }
    },
    methods: {
        cancelSelected() {
            router.push({name: 'storeRoute'})
        },
        addItem() {
            this.$http.post("/products/add", this.newProduct
            ).then(response => {
                this.newProduct = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
        setProductCountryId(selectedCountryId) {
            this.newProduct.productCountryId = selectedCountryId
        },
        setProductBloodGroupId(selectedBloodGroupId) {
            this.newProduct.productBloodgroupId = selectedBloodGroupId
        },
        setProductGroupId(selectedProductGroupId) {
            this.newProduct.productCategoryId = selectedProductGroupId
        },
    }
}
</script>

<style scoped>
section {
    color: black;
}
small {
    color: #FF0000;
}
.add-item-textarea {
    background: transparent!important;
    color: #FF0000;
}
.add-item-textarea:focus{
    color: #FF0000;
    background: transparent!important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 500px 10px #660000 !important;
}
.add-item-textarea::placeholder {
    color: #FF0000!important;
    background-color: transparent;
}

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

