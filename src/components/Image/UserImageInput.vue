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
            const selectedImage = event.target.files[0];
            this.emitBase64(selectedImage);
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
<style scoped>
section {
    color: black;
}

input {
    background-color: transparent !important;
    color: whitesmoke;
}

input:focus {
    color: white !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 500px 10px #660000 !important;
}

button:hover {
    background-color: #660000 !important;
    color: white !important;
    transition: all 700ms ease !important;
    transform: scale(1.1) !important;
    border-color: #660000 !important;
    box-shadow: 0px 0px 300px 10px #660000;
}

alert-div {
    position: relative;
    margin-top: 200px;
}

input[type="file"]::-webkit-file-upload-button {
    padding: 8px 16px; /* Adjust the padding as needed */
    font-size: 14px; /* Adjust the font size as needed */
    background-color: black; /* Customize the background color */
    color: white; /* Customize the text color */
    border-radius: 4px; /* Add border radius if desired */
    font-family: inherit;
}


</style>