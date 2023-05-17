<template>
    <section id="login">

        <div class="container">
            <div class="col">
                <AlertDanger v-if="username === '' || password ===''" :message="this.message"/>
            </div>
        </div>
        <div class="container content-container text-center">
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
                <div class="col d-flex justify-content-center">
                    <button @click="login" class="btn btn-outline-light">Login</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AlertDanger from "@/components/AlertDanger.vue";

export default {
    name: "LoginView",
    components: {AlertDanger},

    data() {
        return {
            message: '',
            email: '',
            password: ''

        }
    },
    methods: {
        login() {
            this.message =  '';
            if (this.email == '' || this.password == '') {
                this.message = 'Please fill in all the required fields';
            }

        },
    }
};
</script>

<style scoped>

section {
    color: black;
}

.container {
    position: relative;
    top: 20%;
    height: 10%;
    width: 100%;

}

.content-container {
    color: white;
    position: relative;
    top: 18%;
    width: 22%;
    height: 45%;
    border-radius: 15%;
    background-color: #131313;
    border-style: solid;
    border-color: #1d1d1d;
}

input {
    background-color: grey;
}

alert-div {
    position: relative;
    margin-top: 200px;
}


</style>