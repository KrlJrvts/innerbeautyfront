<template>
    <section id="register">
        <div class="container">
            <div class="col">
                <AlertDanger :message="message"/>
            </div>
        </div>
        <div class="container content-container" id="registration-container">
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
                        <div class="col-12 image-file mb-3">
                            <img :src="image" class="img-thumbnail rounded-3 registration-image"  style="height: 180px; width: 150px" alt="...">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="col">
                                <input class="form-control w-75 registration-image-input" type="file" accept="image/jpeg" id="imageInput" @change="handleImage">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row button-row">
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
            image: '/userdefaultimage/defaultimage.jpeg',
            firstName: '',
            lastName: '',
            errorResponse: {
                message: '',
                errorCode: 0
            }
        }
    },
    methods: {
        handleImage(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                this.image = e.target.result; // Save the base64 string to the 'image' data property
            };

            reader.readAsDataURL(file);
        },

        register() {
            if (this.email == '' || this.password == '' || this.firstName == '' || this.lastName == '') {
                this.message = 'Please fill all fields!';
            } else if (this.confirmPassword !== this.password) {
                this.message = 'Passwords do not match! '
            } else {
                this.postRegisterUser()
            }
        },

        postRegisterUser() {
            const registrationBody = {
                userEmail: this.email,
                userPassword: this.password,
                userImage: this.image,
                contactFirstname: this.firstName,
                contactLastname: this.lastName

            }


            this.$http
                .post("/register",registrationBody)
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
    border-color: #660000!important;
}
.image-col {
    position: relative;
    bottom: 40px;
    left: 80px;

}
.image-file {
    position: relative;
    right: 40px;
}
input[type="file"]::-webkit-file-upload-button {
    padding: 8px 16px; /* Adjust the padding as needed */
    font-size: 14px; /* Adjust the font size as needed */
    background-color: black; /* Customize the background color */
    color: white; /* Customize the text color */
    border-radius: 4px; /* Add border radius if desired */
    font-family: inherit;
}
.button-row {
    position: relative;
    bottom: 5%;
}


</style>