<template>
    <nav v-if="!isHomepage && !isLoginPage && !isRegisterPage && !isErrorPage">
        <div class="row homepage-brand-row col-12">
            <div class="col d-flex justify-content-start  mt-1">
            </div>
            <div class="col d-flex justify-content-center p-2 ">
                <router-link class="homepage-brand-name" to="/store">Inner
                    <i class="fa-regular fa-heart fa-beat-fade fa-md"></i>
                    Beauty
                </router-link>
            </div>

            <div class="col d-flex justify-content-end p-2">
                <div class="ps-4 pt-3">
                    <router-link to="/add-item"><i class="fa-solid fa-plus fa-2xl"></i></router-link>
                </div>
                <div class="ps-4 pt-3">
                    <router-link to="" @click="openLogOutModal">
                        <i
                            class="fa-solid fa-arrow-right-from-bracket fa-2xl logout"
                            :class="{ 'logout-active': isModalOpen }"
                        ></i>
                    </router-link>
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
    <LogOutModal ref="logOutModal" @modal-opened="handleModalOpened" @modal-closed="handleModalClosed"/>
    <router-view/>
</template>


<script>

import LogOutModal from "@/components/Modals/LogOutModal.vue";
import router from "@/router";

export default {
    components: {LogOutModal},
    data() {
        return {
            isModalOpen: false
        }
    },
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
        isErrorPage() {
            return this.$route.path === '/error';
        }
    },
    methods: {
        openLogOutModal() {
            this.isModalOpen = true
            this.$refs.logOutModal.openModal();
        },
        handleModalOpened() {
            this.isModalOpen = true;
        },
        handleModalClosed() {
            this.isModalOpen = false;
        },
    }
};
</script>
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
.logout {
    color: white;
}
.logout:hover {
    color: #660000;
}
.logout-active {
    color: #FF0000;
}
nav a:hover {
    color: #660000;
}

nav a.router-link-exact-active {
    color: #FF0000;

}

.homepage-brand-name {
    margin: 0;
}
</style>