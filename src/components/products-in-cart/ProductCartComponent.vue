<template>
  <div v-for="product in products" :key="totalProducts.product.productId" class="card mb-3 cart-product" style="max-width: 800px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="../../assets/cartpictures/HumanOrgansBox.jpeg" class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body card-padding">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title col-9">Card title</h5>
            <a class="btn button-product-cart"><i class="fa-solid fa-xmark fa-lg clickable-icon"
                                                  @click="removeProductFromCart"></i></a>
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
      totalProducts: [{
        totalPrices: 0,
        products: [
          {
            productId: 0,
            productName: '',
            countryName: '',
            productAge: 0,
            productDescription: '',
            productPrice: 0,
            genderName: '',
            bloodgroupType: '',
            imageData: '',
            sellerEmail: '',
            productAvailableAt: ''
          }
        ]


      }]

    }

  },
  methods: {
    removeProductFromCart: function () {
      this.$http.delete("/products/cart-delete")
          .then(response => {
            router.push({name: 'cartRoute'})
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    getCartProducts: function () {
      this.$http.get("/products/cart", {
            params: {
              buyerId: Number(sessionStorage.getItem('userId')),
            }
          }
      ).then(response => {
        this.totalProducts = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
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

</style>