<template>
    <section id="Add-item">
        <div class="register-alert-container">
            <div class="col">
                <AlertDanger :message="message"/>
            </div>
        </div>
        <div class="container add-item-container text-center">
            <div class="row d-flex justify-content-center products-select-row">
                <div class="col col-3 mt-5">
                    <div class="mb-3">
                        <ProductGroupDropdown @event-emit-selected-category-id="setProductGroupId"/>
                    </div>
                    <div class="mb-3">
                        <CountryDropdown @event-emit-selected-country-id="setProductCountryId"/>
                    </div>
                    <div class="mb-3">
                        <BloodGroupDropdown @event-emit-selected-blood-group-id="setProductBloodGroupId"/>
                    </div>
                    <div class="mb-0">
                        <GenderDropdown @event-emit-selected-gender-id="setProductGenderId"/>
                    </div>
                    <div class="mb-3 mt-1 pt-2">
                        <small>Enter Removal Date</small>
                        <input v-model="newProduct.productAvailableAt" type="date" class="form-control"
                               placeholder="Removal date">
                    </div>
                    <div class="mb-3">
                        <input v-model="newProduct.productAge" type="number" class="form-control"
                               placeholder="Organ Owner Age">
                    </div>
                    <div class="mb-3">
                        <input v-model="newProduct.productPrice" type="number" class="form-control" placeholder="Price">
                    </div>
                    <button @click="cancelSelected" type="submit"
                            class="btn btn-outline-light button-homepage account-button m-3">
                        Cancel
                    </button>
                    <button @click="addItemValidation" type="submit"
                            class="btn btn-outline-light button-homepage account-button mt">
                        Add Item
                    </button>
                </div>
                <div class="col col-3 mt-5">
                    <div class="row">
                        <div class="col mb-4">
                            <AddItemImage :picture-data-base64="newProduct.productImage"
                                          style="height: 200px; width: 200px"/>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center products-select-row">
                        <div class="col mt-3 ">
                            <div class="form-floating mb-4 mt-2 ">
                                <textarea v-model="newProduct.productDescription" class="form-control add-item-textarea"
                                          placeholder="Product Description..." id="floatingTextarea"
                                          style="height: 135px"></textarea>
                            </div>
                            <div class="form-floating ms-5 pe-0">
                                <UserImageInput @event-emit-base64="emitBase64"/>
                            </div>
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
import AlertDanger from "@/components/AlertDanger.vue";
import UserImage from "@/components/Image/UserImage.vue";
import UserImageInput from "@/components/Image/UserImageInput.vue";
import AddItemImage from "@/components/Image/AddItemImage.vue";

export default {
    name: "AddItemView",
    components: {
        AddItemImage, UserImageInput, UserImage, AlertDanger,
        GenderDropdown, BloodGroupDropdown, CountryDropdown, ProductGroupDropdown
    },

    data() {
        return {
            message: '',
            newProduct: {
                productSellerId: Number(sessionStorage.getItem('userId')),
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
        setProductCountryId(selectedCountryId) {
            this.newProduct.productCountryId = selectedCountryId
        },
        setProductBloodGroupId(selectedBloodGroupId) {
            this.newProduct.productBloodgroupId = selectedBloodGroupId
        },
        setProductGroupId(selectedProductGroupId) {
            this.newProduct.productCategoryId = selectedProductGroupId
        },
        setProductGenderId(selectedProductGenderId) {
            this.newProduct.productGenderId = selectedProductGenderId
        },
        emitBase64(pictureDataBase64) {
            this.newProduct.productImage = pictureDataBase64;
        },
        addItemValidation() {
            this.dropdownValidation();
            this.fieldValidation();
            if (this.message === '') {
                this.addItem();
            }

        },
        dropdownValidation() {
            if (this.newProduct.productCategoryId === 0) {
                this.message = 'Please choose Category'
            } else if (this.newProduct.productCountryId === 0) {
                this.message = 'Please choose Country'
            } else if (this.newProduct.productBloodgroupId === 0) {
                this.message = 'Please choose Blood Group'
            } else if (this.newProduct.productGenderId === 0) {
                this.message = 'Please choose Gender'
            } else {
                this.message = ''
            }
        },
        fieldValidation() {
            if (this.newProduct.productAvailableAt === '') {
                this.message = 'Please enter Removal Date'
            } else if (this.newProduct.productAge === '') {
                this.message = 'Please enter Organ Owner Age'
            } else if (this.newProduct.productAge < 0) {
                this.message = 'Organ Owner Age cannot be a negative number'
            } else if (this.newProduct.productPrice === '') {
                this.message = 'Please enter Price'
            } else if (this.newProduct.productPrice < 0) {
                this.message = 'Ehh... Are you up for charity? '
            } else if (this.newProduct.productDescription === '') {
                this.message = 'Please enter Product Description'
            } else if (this.newProduct.productAvailableAt.length !== 10) {
                this.message = 'Date format wrong. Please use the format dd.mm.yyyy'
            } else {
                this.message = ''
            }

        },
        addItem() {
            this.$http.post("/products/add", this.newProduct
            ).then(response => {
                if (response.status === 200) {
                    this.message = 'Product is successfully added to store!'
                    this.newProduct.productImage = ''
                }
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
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

.add-item-container {
    color: white;
    position: relative;
    top: 15%;

}

.add-item-textarea {
    background: transparent !important;
    color: #FF0000;
}

.add-item-textarea:focus {
    color: #FF0000;
    background: transparent !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 500px 10px #660000 !important;
}

.add-item-textarea::placeholder {
    color: #FF0000 !important;
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

.register-alert-container {
    position: absolute;
    top: 14%;
    left: 0;
    right: 0;
    padding: 0;
    z-index: 1;
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

