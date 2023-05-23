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
            <div class="row">
                <div class="col-6">
                    <div class="row">

                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="First name">
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="Last name">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <input type="text" class="form-control" placeholder="Email">
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    Column
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
            image: '',
            firstName: '',
            lastName: '',
            loginResponse: {
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
            } else {
                this.postRegisterUser();
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
</style>