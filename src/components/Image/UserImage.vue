<template>
    <img v-if="pictureDataBase64 === ''" src="../../assets/accountpictures/HoodedFigure.jpeg" class="img-thumbnail rounded-3 registration-image"
         style="height: 188px; width: 170px">
    <img v-else :src="pictureDataBase64" class="img-thumbnail rounded-3 registration-image"
         style="height: 180px; width: 170px">
</template>
<script>
export default {
    name: 'UserImage',
    props: {
        pictureDataBase64: String
    },
}
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

.registration-image {
    padding: 0;
    border-color: #660000 !important;
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