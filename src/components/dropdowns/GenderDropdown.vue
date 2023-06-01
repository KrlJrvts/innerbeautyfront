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
