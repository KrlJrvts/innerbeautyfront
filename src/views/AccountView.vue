<template>
    <section>
        <div class="register-alert-container">
            <AlertDanger :message="message"/>
        </div>
        <div class="container account-container text-center">
            <div class="row justify-content-center ">
                <div class="col col-5 mt-5 ms-5 account-field-container ">
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="userRequestExtended.userPassword" type="password" class="form-control"
                               id="password">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Confirm Password</label>
                        <input v-model="confirmPassword" type="password" class="form-control" id="confirm-password">
                    </div>
                    <button @click="" type="submit" class="btn btn-outline-light button-homepage account-button m-3">
                        Cancel
                    </button>
                    <button @click="editAccount" type="submit"
                            class="btn btn-outline-light button-homepage account-button mt">
                        Save changes
                    </button>
                </div>
                <div class="col col-6 mt-5">
                    <div class="row">
                        <div class="col">
                            <img src="../assets/accountpictures/HoodedFigure.jpeg" class="img-thumbnail account-image w-75"
                                 style="width: 180px; height: 255px;">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mt-3">
                            <input class="form-control w-100 registration-image-input" type="file"
                                   accept="image/jpeg" id="imageInput" @change="handleImage">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AlertDanger from "@/components/AlertDanger.vue";

export default {
    name: "AccountView",
    components: {AlertDanger},
    data() {
        return {
            message: '',
            confirmPassword: '',

            userRequestExtended: {
                userId: Number(sessionStorage.getItem('userId')),
                userPassword: '',
                userImage: ''
            }
        }
    },
    methods: {
        editAccount() {
            if (this.userRequestExtended.userPassword == '' || this.confirmPassword == '') {
                this.message = 'Please fill all fields!'
            } else if (this.password !== this.confirmPassword) {
                this.message = 'Passwords do not match!'
            } else {

            }
        },
    }
}
</script>
<style scoped>
section {
    color: white;
}

input {
    background-color: transparent !important;
    color: whitesmoke;
}

.register-alert-container {
    position: absolute;
    top: 14%;
    left: 0;
    right: 0;
    padding: 0;
    z-index: 1;
}

.account-container {
    position: relative;
    top: 15%;
    color: white;
    width: 600px;
    height: 460px;
    border-radius: 50px;
    border-style: solid;
    border-color: #1d1d1d;
    background: rgba(0, 0, 0, .3);
}

.account-field-container {
    position: relative;
    top: 85px;
}

.account-button {
    font-size: 15px !important;
}

input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 500px 10px #660000 !important;
}

.account-image {
    border-color: #660000 !important;
    border-style: solid;
    border-width: 2px;
    padding: 0;
}
</style>