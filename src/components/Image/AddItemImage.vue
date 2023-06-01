<template>
    <img v-if="pictureDataBase64 === ''" src="../../assets/accountpictures/thebox.jpeg" class="img-thumbnail rounded-3 registration-image"
         style="height: 180px; width: 170px">
    <img v-else :src="pictureDataBase64" class="img-thumbnail rounded-3 registration-image"
         style="height: 180px; width: 170px">
</template>
<script>
export default {
    name: 'AddItemImage',
    props: {
        pictureDataBase64: String
    },
}
</script>
