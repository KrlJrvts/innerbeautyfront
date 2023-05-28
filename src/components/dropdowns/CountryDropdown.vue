<template>
    <select v-model="selectedCountryId" @change="emitSelectedCountryId" class="form-select country-select-products" >
        <option v-if="firstOptionName === 'Country'" disabled selected value="0">Country</option>
        <option v-else selected value="0">{{firstOptionName}}</option>
        <option v-for="country in countries" :key=country.countryId :value=country.countryId>{{country.countryName}}</option>
    </select>
</template>
<script>
import router from "@/router";

export default {
    name: 'CountryDropdown',

    data() {
        return {
            selectedCountryId: '0',
            countries:[
                {
                    countryId: 0,
                    countryName: ''
                }
            ],
            firstOptionName: 'Country'

        }
    },

    methods: {
        getCountries: function () {
            this.$http.get("/products/countries")
                .then(response => {
                    this.countries = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },
        setFirstOptionName(firstOptionName) {
            this.firstOptionName = firstOptionName
        },

        emitSelectedCountryId() {
            this.$emit('event-emit-selected-country-id', Number(this.selectedCountryId))
        },
    },
    beforeMount() {
        this.getCountries()
    }
}
</script>
<style scoped>

.form-select option:checked {
    color: yellow!important;
    background-color: yellow!important;
}



</style>