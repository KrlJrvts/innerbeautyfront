<template>
  <div v-for="product in totalCartProducts.products" :key="product.productId" class="card mb-3 cart-product">
    <div class="row g-0 product-data-component">
      <div class="col-md-4">
        <img v-if="product.imageData === '' " src="../../assets/cartpictures/HumanOrgansBox.jpeg" class=" rounded-start product-cart-image">
        <img else :src="product.imageData" class=" rounded-start product-cart-image" >
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
    <ProductCartEmptyComponent v-if="totalCartProducts.products.length === 0"/>
</template>

<script>
import CardDataComponent from "@/components/products-in-cart/CardDataComponent.vue";
import router from "@/router";
import ProductCartEmptyComponent from "@/components/products-in-cart/ProductCartEmptyComponent.vue";

export default {
  name: 'ProductCartComponent',
  components: {ProductCartEmptyComponent, CardDataComponent},

  data() {
    return {
      totalCartProducts: {
        totalPrice: 0,
        products: []
      }
    }
  },

  methods: {


    getCartProducts() {
      this.$http.get("/products/cart", {
        params: {
          buyerId: Number(sessionStorage.getItem('userId')),
        }
      })
          .then(response => {
            this.totalCartProducts = response.data
            this.emitTotalPrice()
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
        this.getCartProducts()
        this.emitTotalPrice()
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })

    },
    emitTotalPrice() {
      this.$emit('total-price', this.totalCartProducts.totalPrice)
    }

  },

  beforeMount() {
    this.getCartProducts()

  }
}
</script>

<style scoped>

</style>
