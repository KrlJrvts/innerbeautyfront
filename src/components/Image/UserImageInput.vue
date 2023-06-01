<template>
    <div class="col">
        <input type="file" @change="handleImage" class="form-control w-75 registration-image-input"
               accept="image/x-png,image/jpeg,image/gif">
    </div>
</template>
<script>
export default {
    name: 'UserImageInput',
    data() {
        return {
            pictureDataBase64: ''
        }
    },
    methods: {
        handleImage(event) {
            const selectedFiles = event.target.files;
            if (selectedFiles && selectedFiles.length > 0) {
                const selectedImage = selectedFiles[0];
                this.emitBase64(selectedImage);
            }
        },

        emitBase64(fileObject) {
            const reader = new FileReader();
            reader.onload = () => {
                this.pictureDataBase64 = reader.result;
                this.$emit('event-emit-base64', this.pictureDataBase64)
            };
            reader.onerror = function (error) {
                alert(error);
            }
            reader.readAsDataURL(fileObject);
        },
    },


};
</script>
