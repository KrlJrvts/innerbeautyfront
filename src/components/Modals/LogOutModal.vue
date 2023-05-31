<template>
    <div v-if="isOpen" class="container log-out-modal text-center">
        <div class="row mt-5">
            <div class="col">
                <h3>Are you really going to leave?</h3>
            </div>
        </div>
        <div class="row" style="height: 200px">
            <div class="col-6 d-flex align-items-end">
                <button @click="closeModal" id="runaway-btn" class="btn button-modal w-75 ms-5">Cancel</button>
            </div>
            <div class="col-6 d-flex align-items-end">
                <button class="btn button-modal w-75" @click="logOut" >Yes</button>
            </div>
        </div>
    </div>

</template>

<script>

import router from "@/router";

export default {
    name: "LogOutModal",
    data() {
        return {
            isOpen: false,
        }
    },

    methods: {
        closeModal() {
            this.isOpen = false;
            this.$emit('modal-closed')
        },
        openModal() {
            this.isOpen = true;
            this.$emit('modal-opened')
        },
        logOut() {
            sessionStorage.clear();
            this.closeModal()
            router.push({name: 'homeRoute'})
        },
    }
}
</script>
