<template>
    <select v-model="selectedCategoryId" @change="emitSelectedCategoryId"  class="form-select" aria-label="Default select example">
        <option v-if="firstOptionName === 'Category'" disabled selected value="0">Category</option>
        <option v-else selected value="0">{{ firstOptionName }}</option>
        <option v-for="category in categories" :key=category.categoryId  :value=category.categoryId>{{category.categoryName}}</option>

    </select>
</template>
<script>
import router from "@/router";

export default {
    name: 'ProductGroupDropdown',
    data() {
        return {
            selectedCategoryId: '0',
            categories: [
                {
                    categoryId: 0,
                    categoryName: ''
                }
            ],
            firstOptionName: 'Category'

        }
    },

    methods: {
        getCategories: function () {
            this.$http.get("/products/categories")
                .then(response => {
                    this.categories = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },
        setFirstOptionName(firstOptionName) {
            this.firstOptionName = firstOptionName
        },
        emitSelectedCategoryId() {
            this.$emit('event-emit-selected-category-id',Number(this.selectedCategoryId))
        }
    },
    beforeMount() {
        this.getCategories()
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

</style>