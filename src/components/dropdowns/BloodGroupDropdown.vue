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
        setFirstBloodGroupSelected() {
            this.selectedBloodGroupId = '0'
            this.emitSelectedBloodGroupId()
        }
    },
    beforeMount() {
        this.getBloodGroups()
    }

}


</script>
