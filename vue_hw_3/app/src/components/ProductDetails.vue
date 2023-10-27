<template>
  <div>
    <h2>Name - {{ product.name }}</h2>
    <h2>Price - {{ formattedPrice }}</h2>
    <h2 class="available" v-if="product.available">Available</h2>
    <h2 v-else class="outProduct">Out of stock</h2>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  computed: {
    formattedPrice() {
      return "$" + this.product.price;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid #000;
  width: 300px;
}
.outProduct {
  color: red;
}
.available {
    color: green;
}
</style>
