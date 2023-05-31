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
