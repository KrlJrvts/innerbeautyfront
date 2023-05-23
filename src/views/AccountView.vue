<template>
    <section>
        <div class="container account-container text-center">
            <AlertDanger :message="message"/>
            <div class="row justify-content-center">
                <div class="col col-3 mt-5">
                    <div class="mb-3">
                        <label for="username" class="form-label">E-mail</label>
                        <input v-model="email" type="text" class="form-control input" id="e-mail">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="password">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Confirm Password</label>
                        <input v-model="confirmPassword" type="password" class="form-control" id="confirm-password">
                    </div>
                    <button @click="" type="submit" class="btn btn-outline-light button-homepage account-button m-3">
                        Cancel
                    </button>
                    <button @click="" type="submit" class="btn btn-outline-light button-homepage account-button mt">Save
                        changes
                    </button>
                </div>
                <div class="col col-3 mt-5">
                    <div class="row">
                        <div class="col">
                            <img src="../assets/accountpictures/HoodedFigure.jpeg" class="img-thumbnail" style="width: 180px; height: 255px;">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mt-3">
                            <button @click="" type="submit"
                                    class="btn btn-outline-light button-homepage account-button">Choose
                                file
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="" class="rounded mx-auto d-block" alt="">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "AccountView",
    data() {
        return {
            message: '',
            email: '',
            password: '',
            confirmPassword: '',
            loginResponse: {
                userId: 0,
                roleName: ''
            },
        }
    },
}
</script>
<style scoped>
section {
    color: white;
}

input {
    background-color: transparent !important;
    /*background-color: grey;*/
    color: whitesmoke;
}

.account-container {
    position: relative;
    top: 15%;
}

.account-button {
    font-size: 15px !important;
}

input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 500px 10px #660000 !important;
}

.button-login:hover {
    background-color: #660000 !important;
    color: white !important;
    transition: all 700ms ease !important;
    transform: scale(1.1) !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 20px #660000;
}
</style>