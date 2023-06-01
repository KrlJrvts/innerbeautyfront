<template>
    <div v-if="isOpen" class="container modal-style text-center">
        <div class="row mt-5">
            <div class="col">
                <h3>Product Description:</h3>
                <hr class="product-description-modal-hr">
            </div>
        </div>
        <div class="row">
            <div class="col mt-2 description-container " style="height: 180px">
                <p class="product-description-modal-text">{{ productDescription }}</p>
            </div>
        </div>
        <div class="row ">
            <div class="col d-flex justify-content-center gap-5">
                <a class="btn button-product-description-close" @click="closeModal"><i class="fa-regular fa-circle-xmark fa-3x"></i></a>

                <a v-if="isInFavorites == false" class="btn button-product-favorite" @click="addToFavorites(chosenProductId)"><i class="fa-regular fa-heart fa-3x "></i></a>
                <a v-else-if="isInFavorites == true" class="btn button-product-favorite" @click="removeFromFavorites(chosenProductId)"><i class="fa-solid fa-heart-circle-check fa-3x"></i></a>

                <a v-if="cartStatus == 'A'" class="btn button-product-cart" @click="addToCart(chosenProductId)"><i class="fa-solid fa-basket-shopping fa-3x"></i></a>
                <a v-else-if="cartStatus == 'C'"  class="btn button-product-cart" ><i class="fa-solid fa-check fa-3x"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductDescription",
    props: {
        productDescription: {
            type: String,
            required: true,
        },

    },
    data() {
        return {
         isOpen: false,
            chosenProductId: null,
            isInFavorites: true,
            cartStatus: '',
        }
    },
    methods: {
      openModal(productId,isInFavorites,status) {
          this.isOpen = true;
          this.chosenProductId = productId;
          this.isInFavorites = isInFavorites;
          this.cartStatus = status
      },
      closeModal() {
          this.isOpen = false;
      },
        addToCart(productId){
          this.cartStatus = 'C'
          this.$emit('event-add-to-cart', productId)
        },
        addToFavorites(productId) {
          this.isInFavorites = true;
          this.$emit('event-add-to-favorites', productId)
        },
        removeFromFavorites(productId) {
          this.isInFavorites = false;
          this.$emit('event-remove-from-favorites', productId)
        }
    }
}
</script>
