<template>
    <section>
        <div class="register-alert-container">
            <AlertDanger :message="message"/>
        </div>
        <div class="container account-container text-center">
            <div class="row justify-content-center ">
                <div class="col col-5 mt-5 ms-5 account-field-container ">
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="editUserData.userPassword" type="password" class="form-control"
                               id="password">
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label">Confirm Password</label>
                        <input v-model="confirmPassword" type="password" class="form-control" id="confirm-password">
                    </div>
                    <div class="mt-5">
                        <button @click="cancelEdit" type="submit"
                                class="btn btn-outline-light button-homepage account-button ms-0 me-3 ">
                            Cancel
                        </button>
                        <button @click="saveChanges" type="submit"
                                class="btn btn-outline-light button-homepage account-button">
                            Save changes
                        </button>
                    </div>
                </div>
                <div class="col col-6 mt-5">
                    <div class="row">
                        <div class="col mb-2">
                            <UserImage :picture-data-base64="editUserData.userImage"
                                       style="height: 255px; width: 200px;"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mt-4">
                            <UserImageInput @event-emit-base64="emitBase64" style="width: 350px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AlertDanger from "@/components/AlertDanger.vue";
import UserImage from "@/components/Image/UserImage.vue";
import UserImageInput from "@/components/Image/UserImageInput.vue";
import router from "@/router";

export default {
    name: "AccountView",
    components: {UserImageInput, UserImage, AlertDanger},
    data() {
        return {
            message: '',
            confirmPassword: '',
            editUserData: {
                userPassword: '',
                userImage: ''
            },
            userData: {
                userPassword: '',
                userImage: ''
            }
        }
    },
    methods: {
        emitBase64(pictureDataBase64) {
            this.editUserData.userImage = pictureDataBase64;
        },
        cancelEdit() {
            router.push({name: 'storeRoute'})
        },
        saveChanges() {
            if (this.editUserData.userPassword == '' || this.confirmPassword == '') {
                this.message = 'Please fill all fields!'
            } else if (this.editUserData.userPassword !== this.confirmPassword) {
                this.message = 'Passwords do not match!'
            } else {
                this.message = '';
                this.editUserAccount();
            }
        },
        editUserAccount() {
            this.$http.put("/user/edit", this.editUserData, {
                    params: {
                        userId: Number(sessionStorage.getItem('userId')),
                    }
                }
            ).then(response => {
                if (response.status === 200) {
                    this.message = 'User edit completed successfully!'
                }
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
    },
    mounted() {
        this.editUserAccount()
    }
}
</script>
<style scoped>
section {
    color: white;
}

input {
    background-color: transparent !important;
    color: whitesmoke;
}

.register-alert-container {
    position: absolute;
    top: 14%;
    left: 0;
    right: 0;
    padding: 0;
    z-index: 1;
}

.account-container {
    position: relative;
    top: 15%;
    color: white;
    width: 600px;
    height: 460px;
    border-radius: 50px;
    border-style: solid;
    border-color: #1d1d1d;
    background: rgba(0, 0, 0, .3);
}

.account-field-container {
    position: relative;
    top: 85px;
}

.account-button {
    font-size: 15px !important;
}

input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 500px 10px #660000 !important;
}

</style>