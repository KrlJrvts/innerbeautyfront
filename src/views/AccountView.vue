<template>
    <section>
        <div class="alert-container">
            <AlertDanger :message="message"/>
        </div>
        <div class="container account-container text-center">
            <div class="row justify-content-center ">
                <div class="col col-5 ms-5 mt-5">

                    <div class="mb-5">
                        <label for="password" class="form-label">Current Password</label>
                        <input v-model="currentPasswordValidation" type="password" class="form-control"
                               id="confirm-password">
                    </div>
                    <div class="mb-2">
                        <label for="password" class="form-label">Set New Password</label>
                        <input v-model="editUserData.userPassword" type="password" class="form-control"
                               id="password">
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label">Confirm New Password</label>
                        <input v-model="confirmPassword" type="password" class="form-control" id="confirm-password">
                    </div>
                    <div class="">
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
                            <UserImage :picture-data-base64="userData.userImage"
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
            currentPasswordValidation: '',
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
        clearMessage() {
            setTimeout(() => {
                this.message = '';
                window.location.reload()
            }, 2000);
        },
        emitBase64(pictureDataBase64) {
            this.userData.userImage = pictureDataBase64;
            this.editUserData.userImage = pictureDataBase64;
        },
        cancelEdit() {
            router.push({name: 'storeRoute'})
        },
        saveChanges() {
            this.imageHandling()
            this.dataFieldValidation()
            if (this.message === '') {
                this.editUserAccount();
            }
        },
        imageHandling() {
            if (this.editUserData.userImage === '') {
                this.editUserData.userImage = this.userData.userImage
            }
        },
        dataFieldValidation() {
            if (this.userData.userPassword !== this.currentPasswordValidation) {
                this.message = 'Invalid current password!'
            } else if (this.editUserData.userPassword == '' || this.confirmPassword == '') {
                this.message = 'Please fill all fields!'
            } else if (this.editUserData.userPassword !== this.confirmPassword) {
                this.message = 'Passwords do not match!'
            } else {
                this.message = '';
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
                this.clearMessage()
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
        getUserData: function () {
            this.$http.get("/user/get-data/", {
                    params: {
                        userId: Number(sessionStorage.getItem('userId')),
                    }
                }
            ).then(response => {
                this.userData = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
    },

    beforeMount() {
        this.getUserData()
    }
}
</script>
<style scoped>

</style>