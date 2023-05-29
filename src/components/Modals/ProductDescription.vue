<template>
    <div v-if="isOpen" class="container content-container-product-description-modal text-center">
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

<style scoped>
.content-container-product-description-modal {
    color: white;
    position: fixed;
    z-index: 1;
    top: 19%;
    width: 400px;
    height: 400px;
    border-radius: 15%;
    border-style: solid;
    border-color: #FF0000;
    background: rgba(0, 0, 0, .9);
}

.product-description-modal-hr {
    border-style: dotted;
    border-width: 0 0 5px;
    color: rgba(255, 0, 0, 1);
}

.description-container {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
}

.product-description-modal-text {
    font-size: 23px;
}

.button-product-description-close {
    padding: 12px !important;
    color: #660000;
}

.button-product-description-close:hover {
    color: #FF0000;
    scale: 1.1;
    rotate: 360deg;
    transition: all 400ms ease-in-out !important;
}

.button-product-favorite {
    padding: 12px !important;
    color: #660000;
}

.button-product-favorite:hover {
    color: #FF0000;
    animation: heartbeat 1s infinite !important;

}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1.05);
    }
    50% {
        transform: scale(1.2);
    }

}

.button-product-cart {
    padding: 12px !important;
    color: #660000;
}

.button-product-cart:hover {
    color: #FF0000;
    scale: 1.1;
    transition: all 400ms ease-in-out !important;
    animation: swing 1s infinite;
}

@keyframes swing {
    20% {
        transform: rotate(15deg);
    }
    40% {
        transform: rotate(-10deg);
    }
    60% {
        transform: rotate(5deg);
    }
    80% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}


</style>