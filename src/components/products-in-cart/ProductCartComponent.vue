<template>
  <div v-for="product in totalCartProducts.products" :key="product.productId" class="card mb-3 cart-product">
    <div class="row g-0 product-data-component">
      <div class="col-md-4">
        <img src="../../assets/cartpictures/HumanOrgansBox.jpeg" class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body card-padding">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title col-9">{{ product.productName }}</h5>
            <a class="btn button-product-cart"><i class="fa-solid fa-xmark fa-lg clickable-icon"
                                                  @click="removeProductFromCart(product.productId)"></i></a>
          </div>
          <div class="card-body">
            <CardDataComponent :product="product"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardDataComponent from "@/components/products-in-cart/CardDataComponent.vue";
import router from "@/router";

export default {
  name: 'ProductCartComponent',
  components: {CardDataComponent},

  data() {
    return {
      totalCartProducts: {
        totalPrice: 0,
        cartProducts: []
      }
    }
  },

  methods: {
    deleteProductFromCart() {
      this.$http.delete("/products/cart-delete")
          .then(response => {
            buyerId: Number(sessionStorage.getItem('userId')),
            router.push({name: 'cartRoute'})
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },


    getCartProducts() {
      this.$http.get("/products/cart", {
        params: {
          buyerId: Number(sessionStorage.getItem('userId')),
        }
      })
          .then(response => {
            this.totalCartProducts = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    removeProductFromCart(productId) {

      this.$http.patch("/products/cart-remove", null, {
            params: {
              buyerId: Number(sessionStorage.getItem('userId')),
              productId: Number(productId)
            }
          }
      ).then(response => {
        router.push({name: 'cartRoute'})
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
      this.getCartProducts()
    },

  },

  beforeMount() {
    this.getCartProducts()
  }
}
</script>

<style scoped>
section {
  color: whitesmoke;
}

.cart-product {
  background: transparent;
  color: white;
  border-style: solid;
  border-color: #660000;
}

.card-padding {
  padding: 0 !important;
  margin: 0 !important;
}

.button-product-cart {
  padding: 12px !important;
  color: #660000;
}

.product-data-component {

  border-style: solid;
  border-width: 1px;
  border-color: rgb(255, 0, 0, .4);
  background: rgba(0, 0, 0, .5);
}
</style>
