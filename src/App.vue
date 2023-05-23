<template>
    <nav v-if="!isHomepage && !isLoginPage && !isRegisterPage">
        <div class="row homepage-brand-row col-12">
            <div class="col d-flex justify-content-start p-3">
                <h3>LOGO? </h3>
            </div>
            <div class="col-6 d-flex justify-content-center p-2 ">
                <router-link class="homepage-brand-name" to="/">Inner
                    <i class="fa-regular fa-heart fa-beat-fade fa-md"></i>
                    Beauty
                </router-link>
            </div>

                <div class="col d-flex justify-content-end p-3">
                    <div class="col p-0">
                        <router-link to="/add-item">addItem?</router-link>
                    </div>
                    <div class="ps-4 pt-3">
                        <router-link to="/"><i class="fa-solid fa-arrow-right-from-bracket fa-2xl"></i></router-link>
                    </div>
                    <div class="ps-4 pt-3">
                        <router-link to="/favorite"><i class="fa-regular fa-heart fa-2xl"></i></router-link>
                    </div>
                    <div class="ps-4 pt-3">
                        <router-link to="/account"><i class="fa-regular fa-user fa-2xl"></i></router-link>
                    </div>
                    <div class="ps-4 pt-3">
                        <router-link to="/cart"><i class="fa-solid fa-basket-shopping fa-2xl"></i></router-link>
                    </div>
                </div>

        </div>


    </nav>
    <router-view/>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 10px;
    background-color: #090f0f;
    font-family: 'Playfair Display', serif;

}

nav a {
    font-weight: bold;
    color: white;

}
nav a:hover {
    color: #660000;
}

nav a.router-link-exact-active {
    color: #FF0000;

}
.homepage-brand-name{
    margin: 0;
}
</style>
<script>
export default {
    computed: {
        isHomepage() {
            return this.$route.path === '/';
        },
        isLoginPage() {
            return this.$route.path === '/login';
        },
        isRegisterPage() {
            return this.$route.path === '/register';
        },
    },
};
</script>