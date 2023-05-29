<template>
    <select v-model="selectedBloodGroupId" @change="emitSelectedBloodGroupId" class="form-select" aria-label="Default select example">
        <option v-if="firstOptionName === 'Blood Group'" disabled selected value ="0">Blood Group</option>
        <option v-else selected value="0">{{firstOptionName}}</option>
        <option v-for="bloodGroup in bloodGroups" :key=bloodGroup.bloodGroupTypeId :value=bloodGroup.bloodGroupTypeId>{{bloodGroup.bloodGroupTypeName}}</option>

    </select>
</template>
<script>


import router from "@/router";

export default {
    name: 'BloodGroupDropdown',
    data() {
        return {
            selectedBloodGroupId: '0',
            bloodGroups: [
                {
                    bloodGroupTypeId: 0,
                    bloodGroupTypeName: ''
                }
            ],
            firstOptionName: 'Blood Group'


        }
    },
    methods: {
        getBloodGroups() {
            this.$http.get("/products/bloodgroups")
                .then(response => {
                    this.bloodGroups = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },
        setFirstOptionName(firstOptionName) {
            this.firstOptionName = firstOptionName
        },
        emitSelectedBloodGroupId() {
            this.$emit('event-emit-selected-blood-group-id', Number(this.selectedBloodGroupId))
        },
    },
    beforeMount() {
        this.getBloodGroups()
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


input[type="file"]::-webkit-file-upload-button {
    padding: 8px 16px; /* Adjust the padding as needed */
    font-size: 14px; /* Adjust the font size as needed */
    background-color: black; /* Customize the background color */
    color: white; /* Customize the text color */
    border-radius: 4px; /* Add border radius if desired */
    font-family: inherit;
}



</style>