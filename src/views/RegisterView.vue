<template>
    <section id="register">
        <Navbar :push-to-home="pushToHome" :push-to-login="pushToLogin"/>

        <div class="register-alert-container">
            <div class="col">
                <AlertDanger :message="message"/>
            </div>
        </div>
        <div @keyup.enter="register" class="container content-container-register" id="registration-container">
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
                            <input v-model="userRegister.contactFirstname" type="text" class="form-control" placeholder="First name">
                        </div>
                        <div class="col-6">
                            <input v-model="userRegister.contactLastname" type="text" class="form-control" placeholder="Last name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12">
                            <input v-model="userRegister.userEmail" type="text" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12">
                            <input v-model="userRegister.userPassword" type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <input v-model="confirmPassword" type="password" class="form-control"
                                   placeholder="Confirm Password">
                        </div>
                    </div>
                </div>
                <div class="col-6 image-col">
                    <div class="row">
                        <div class="col-12 image-file mb-3">
                            <UserImage  :picture-data-base64="userRegister.userImage"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <UserImageInput @event-emit-base64="emitBase64"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row button-row ">
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
import Navbar from "@/components/Navbar.vue";
import UserImage from "@/components/Image/UserImage.vue";
import UserImageInput from "@/components/Image/UserImageInput.vue";

export default {
    name: "RegisterView",
    components: {UserImageInput, UserImage, Navbar, AlertDanger},

    data() {
        return {
            message: '',
            confirmPassword: '',
            image: '/userdefaultimage/defaultimage.jpeg',

            userRegister: {
            userEmail: '',
            userPassword: '',
            userImage: '',
            contactFirstname: '',
            contactLastname: ''
            },
            errorResponse: {
                message: '',
                errorCode: 0
            }
        }
    },
    methods: {
        pushToHome() {
            router.push({name: 'homeRoute'})
        },
        pushToLogin() {
            router.push({name: 'loginRoute'})
        },
        emitBase64(pictureDataBase64) {
            this.userRegister.userImage = pictureDataBase64;
        },

        register() {
            if (this.userRegister.userEmail == '' || this.userRegister.userPassword == '' || this.userRegister.contactFirstname == '' || this.userRegister.contactLastname == '' || this.confirmPassword == '') {
                this.message = 'Please fill all fields!';
            } else if (this.confirmPassword !== this.userRegister.userPassword) {
                this.message = 'Passwords do not match!'
            } else {
                this.postRegisterUser()
            }
        },

        postRegisterUser() {
            this.$http
                .post("/user/register", this.userRegister)
                .then(response => {
                    router.push({name: 'loginRoute'})
                }).catch(error => {
                this.errorResponse = error.response.data
                if (this.errorResponse.errorCode === 112) {
                    this.message = this.errorResponse.message
                } else {
                    router.push({name: 'errorRoute'})
                }
            })
        },

    }
}
</script>

<style scoped>
section {
    color: black;
}

.register-alert-container {
    position: absolute;
    top: 14%;
    left: 0;
    right: 0;
    padding: 0;
    z-index: 1;
}

.content-container-register {
    color: white;
    position: relative;
    top: 15%;
    width: 900px;
    height: 520px;
    border-radius: 50px;
    border-style: solid;
    border-color: #1d1d1d;
    background: rgba(0, 0, 0, .3);
}

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

.registration-slogan {
    color: #660000;
}

.image-col {
    position: relative;
    bottom: 40px;
    left: 80px;
}

.image-file {
    position: relative;
    right: 8%;
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