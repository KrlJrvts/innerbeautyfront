<template>
    <nav v-if="!isHomepage && !isLoginPage && !isRegisterPage">
        <router-link to="/store">Navbarlogo</router-link> |
        <router-link to="/add-item">addItem</router-link> |
        <router-link to="/">Logout</router-link> |
        <router-link to="/favorite">Favorite</router-link> |
        <router-link to="/account">editAccount</router-link>|
        <router-link to="/cart">Cart</router-link>
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
    padding: 30px;
    background-color: yellow;


}

nav a {
    font-weight: bold;
    color: #2c3e50;

}

nav a.router-link-exact-active {
    color: #42b983;

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