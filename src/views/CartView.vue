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
