<template>
    <select v-model="selectedCountryId" @change="emitSelectedCountryId" class="form-select" aria-label="Default select example">
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
        setFirstOptionName: function (firstOptionName) {
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