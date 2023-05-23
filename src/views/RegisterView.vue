<template>
    <section id="register">
        <div class="container">
            <div class="col">
                <AlertDanger :message="message"/>
            </div>
        </div>
        <div class="container content-container">
            <div class="row d-flex justify-content-start mt-3 mb-5">
                <div class="col-12 ">
                    <h2>Hurry up and sign up!</h2>
                    <div class="col-12 mt-3">
                        <h5 class="registration-slogan">Before the organs run out</h5>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-6">
                    <div class="row mb-3">
                        <div class="col-6">
                            <input v-model="firstName" type="text" class="form-control" placeholder="First name">
                        </div>
                        <div class="col-6">
                            <input v-model="lastName" type="text" class="form-control" placeholder="Last name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12">
                            <input v-model="email" type="text" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12">
                            <input v-model="password" type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <input v-model="confirmPassword"  type="password" class="form-control" placeholder="Confirm Password">
                        </div>
                    </div>
                </div>
                <div class="col-6 image-col">
                    <div class="row">
                        <div class="col-12">
                            <img src="../assets/categoryphotos/liver.jpg" class="img-thumbnail rounded-3 registration-image"  style="height: 140px; width: 140px" alt="...">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="col mb-3 mt-4">
                                <input class="form-control w-75 registration-image-input" type="file" accept="image/jpeg" id="formFile">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <button @click="register" class="btn btn-outline-light w-25 button-login">Register</button>
                </div>

            </div>

        </div>
    </section>
</template>

<script>
import AlertDanger from "@/components/AlertDanger.vue";
import router from "@/router";

export default {
    name: "RegisterView",
    components: {AlertDanger},

    data() {
        return {
            message: '',
            email: '',
            password: '',
            confirmPassword: '',
            image: '',
            firstName: '',
            lastName: '',
            RegistrationRequest: {
                userId: 0,
                roleName: ''
            },
            errorResponse: {
                message: '',
                errorCode: 0
            }
        }
    },
    methods: {

        register() {
            if (this.email == '' || this.password == '' || this.firstName == '' || this.lastName == '') {
                this.message = 'Please fill all fields!';
            } else if (this.confirmPassword !== this.password) {
                this.message = 'Passwords do not match! '
            } else {

            }
        },

        postRegisterUser() {
            this.clearAlertMessages()
            this.$http.post("/register", this.somePayloadDtoObject
            ).then(response => {
                const responseBody = response.data
            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },
        clearAlertMessages() {
            this.successMessage = ''
            this.errorMessage = ''
        },

    }
}
</script>

<style scoped>
section {
    color: black;
}

.container {
    position: relative;
    top: 15%;
    height: 10%;
    width: 100%;

}

.content-container {
    color: white;
    position: relative;
    top: 15%;
    width: 50%;
    height: 50%;
    border-radius: 50px;
    border-style: solid;
    border-color: #1d1d1d;
    background: rgba(0, 0, 0, .3);
}

input {
    background-color: transparent !important;
    /*background-color: grey;*/
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

.registration-slogan {
    color: #660000;
}
.registration-image {
    padding: 0;
    border-color: black!important;
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