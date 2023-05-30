<template>
  <section id="cart">
    <div class="container cart-container text-center">
      <div class="row">
        <div class="col-9 mt-5">
          <ProductCartComponent @total-price="updateTotalPrice" />
        </div>
        <div class="col-3 mt-5">
          <div class="card border-dark cart-product" style="max-width: 20rem;">
            <div class="card-body product-data-component">
              <div class="container text-center">
                <div class="row">
                  <div class="col">
                    <button @click="buyProductsFromCart" class="btn btn-outline-light button-checkout mb-5">Check out</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    Subtotal
                  </div>
                  <div class="col">
                    {{ totalPrice }} €
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCartComponent from "@/components/products-in-cart/ProductCartComponent.vue";
import router from "@/router";

export default {
  name: "CartView",
  components: { ProductCartComponent },

  data() {
    return {
      totalPrice: 0,
    };
  },

  methods: {
    buyProductsFromCart: function () {
      this.$http.patch("/products/cart-buy", null, {
            params: {
              buyerId: Number(sessionStorage.getItem('userId'))
            }
          }
      ).then(response => {
        router.push({name: 'storeRoute'})
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },

    updateTotalPrice(newPrice) {
      this.totalPrice = newPrice;
    },
  },
};
</script>

<style scoped>
#cart {
  min-height: 100vh;
  height: fit-content;
}

.cart-container {
  background-image: url("@/assets/grunge-black-concrete-textured-background.jpg");
  height: fit-content;
}

section {
  color: whitesmoke;
}

.container {
  position: relative;
  top: 15%;
  height: 10%;
  width: 100%;
}

.cart-product {
  background: transparent;
  color: white;
  border-style: solid !important;
  border-color: #660000 !important;
}

.button-checkout:hover {
  background-color: #660000 !important;
  color: white !important;
  transition: all 700ms ease !important;
  transform: scale(1.1) !important;
  border-color: #660000 !important;
  box-shadow: 0px 0px 300px 10px #660000;
}

.product-data-component {
  border-style: solid;
  border-width: 1px;
  border-color: rgba(255, 0, 0, .4);
  background: rgba(0, 0, 0, .5);
}
</style>
