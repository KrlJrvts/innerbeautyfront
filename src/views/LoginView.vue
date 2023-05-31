<template>
    <section>
        <Navbar :push-to-home="pushToHome"/>
        <div class="container alert-container">
            <div class="col">
                <AlertDanger :message="message"/>
            </div>
        </div>
        <div @keydown.enter="login" class="container content-container-login text-center">
            <div class="row mt-5">
                <div class="col">
                    <h4>E-mail</h4>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col d-flex justify-content-center mt-2">
                    <input v-model="email" type="email" class="form-control w-75" id="" placeholder="Enter email">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h4>Password</h4>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col d-flex justify-content-center mt-2">
                    <input v-model="password" type="password" class="form-control w-75" id=""
                           placeholder="Enter password">
                </div>
            </div>
            <div class="row ">
                <div class="col d-flex justify-content-center  ">
                    <button @click="login" class="btn btn-outline-light w-25 button-login">Login</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AlertDanger from "@/components/AlertDanger.vue";
import router from "@/router";
import Navbar from "@/components/Navbar.vue";


export default {
    name: "LoginView",
    components: {Navbar, AlertDanger},

    data() {
        return {
            message: '',
            email: '',
            password: '',
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
        pushToHome() {
            router.push({name: 'homeRoute'})
        },
        login() {
            this.message = '';
            if (this.email == '' || this.password == '') {
                this.message = 'Please fill in all the required fields';
            } else {
                this.sendLoginRequest();
            }
        },

        sendLoginRequest() {
            this.$http.get("/user/login", {
                    params: {
                        email: this.email,
                        password: this.password
                    }
                }
            ).then(response => {
                this.loginResponse = response.data
                sessionStorage.setItem('userId', this.loginResponse.userId)
                sessionStorage.setItem('roleName', this.loginResponse.roleName)
                router.push({name: 'storeRoute'})
            }).catch(error => {
                this.errorResponse = error.response.data
                if (this.errorResponse.errorCode === 111) {
                    this.message = this.errorResponse.message
                } else {
                    router.push({name: 'errorRoute'})
                }
            })
        },
    },
}

</script>
