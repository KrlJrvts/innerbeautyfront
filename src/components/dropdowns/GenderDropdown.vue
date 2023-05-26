<template>
    <select v-model="selectedGenderId" @change="emitSelectedGenderId" class="form-select" aria-label="Default select example">
        <option v-if="firstOptionName === 'Gender'" disabled selected value="0">Gender</option>
        <option v-else selected value="0">{{firstOptionName}}</option>
        <option v-for="gender in genders" :key=gender.genderId :value=gender.genderId>{{gender.genderName}}</option>
    </select>
</template>
<script>
import router from "@/router";

export default {
    name: 'GenderDropdown',

    data() {
        return {
            selectedGenderId:'0',
            genders: [
                {
                    genderId: 0,
                    genderName: ''
                }
            ],
            firstOptionName: 'Gender'

        }
    },

    methods: {
        getGender: function () {
            this.$http.get("/products/genders")
                .then(response => {
                    this.genders = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },
        setFirstOptionName: function (firstOptionName) {
            this.firstOptionName = firstOptionName
        },

        emitSelectedGenderId() {
            this.$emit('event-emit-selected-gender-id', Number(this.selectedGenderId))
        },
    },
    beforeMount() {
        this.getGender()
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