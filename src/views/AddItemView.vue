<template>
    <section id="Add-item">
        <div class="alert-container">
            <div class="col">
                <AlertDanger :message="message"/>
            </div>
        </div>
        <div class="container add-item-container text-center">
            <div class="row d-flex justify-content-center products-select-row">
                <div class="col col-4 mt-5 me-5">
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
                <div class="col col-5 mt-5 mb-5 ps-3 pe-0">
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
                                          style="height: 135px" maxlength="200"></textarea>
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
        AddItemImage, UserImageInput, AlertDanger,
        GenderDropdown, BloodGroupDropdown, CountryDropdown, ProductGroupDropdown
    },

    data() {
        return {
            message: '',
            dropdownValidationPassed: false,
            fieldValidationPassed: false,
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
            this.fieldValidation();
            this.dropdownValidation();
            if (this.dropdownValidationPassed && this.fieldValidationPassed) {
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
                this.dropdownValidationPassed = true;
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
                this.fieldValidationPassed = true;
            }

        },
        clearMessage() {
            setTimeout(() => {
                this.message = '';
                window.location.reload()
            }, 2000);
        },
        addItem() {
            this.$http.post("/products/add", this.newProduct
            ).then(response => {
                if (response.status === 200) {
                    this.message = 'Product is successfully added to store!'
                    this.newProduct.productImage = ''
                    this.clearMessage()
                }
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
    }
}
</script>


