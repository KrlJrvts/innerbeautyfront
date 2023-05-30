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
                <button class="btn button-modal w-75" >Yes</button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: "ProductDescription",
    props: {
        productDescription: {
            type: String,
            required: true,
        },

    },
    data() {
        return {
            isOpen: true,
        }
    },

    methods: {
        closeModal() {
            this.isOpen = false;
        }
    }
}
</script>

<style scoped>
.log-out-modal {
    color: white;
    position: fixed;
    z-index: 1;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 400px;
    height: 400px;
    border-radius: 15%;
    border-style: solid;
    border-color: #FF0000;
    background: rgba(0, 0, 0, .9);
}

.button-modal {
    background-color: transparent;
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 20px #660000;
}
.button-modal:hover {
    background-color: #660000 !important;
    color: white !important;
    transition: all 700ms ease !important;
    transform: scale(1.1) !important;
    border-color: #FF0000!important;
}

</style>