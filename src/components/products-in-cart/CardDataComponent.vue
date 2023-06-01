<template>
  <div class="container text-start card-padding">
    <div class="row h-25 mb-3">
      <div class="col">
        <div>
          Country:
        </div>
        <div>
          {{ product.countryName }}
        </div>
      </div>
      <div class="col">
        <div>
          Product age:
        </div>
        <div>
          {{ product.productAge }} Years
        </div>
      </div>
      <div class="col">
        <div>
          Price:
        </div>
        <div>
          {{ product.productPrice }} €
        </div>
      </div>
    </div>
    <div class="row h-25 mb-3">
      <div class="col-4">
        <div>
          Remove date:
        </div>
        <div>
          {{ product.productAvailableAt }}
        </div>
      </div>
      <div class="col-4">
        <div>
          Bloodgroup:
        </div>
        <div>
          {{ product.bloodgroupType }}
        </div>
      </div>
    </div>
    <div class="row" style="height: 10vh; position: relative;">
      <div class="col-8">
        <div>
          Description:
        </div>
        <div>
          {{ product.productDescription }}
        </div>
      </div>
      <div class="col-4 d-flex align-items-end justify-content-center" style="position: absolute; bottom: 0; right: 0;">
        <div>
          Seller:
          {{ product.sellerEmail }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'CardDataComponent',
  props: {
    product: {
      type: Object,
      required: true
    }

  }
}
</script>
