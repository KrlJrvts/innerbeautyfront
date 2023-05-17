<template>
    <section id="login">
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <h4>E-mail</h4>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col d-flex justify-content-center mt-2">
                    <input type="email" class="form-control w-25" id="emailInput" placeholder="Enter email">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h4>Password</h4>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col d-flex justify-content-center mt-2">
                    <input type="password" class="form-control w-25" id="emailInput" placeholder="Enter password">
                </div>
            </div>
            <div class="row ">
                <div class="col d-flex justify-content-center mt-2">
                    <button class="btn btn-outline-light">Login </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "LoginView"
}
</script>

<style scoped>

section {
    color: black;
}
.container {
    color: white;
}
input {
    background-color: grey;
}
button {
    position: sticky;

}

</style>