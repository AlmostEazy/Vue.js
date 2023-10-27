<template>
  <div>
    <ProductDetails
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductDetails from "./ProductDetails.vue";

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Pasta",
          price: 1.55,
          available: true,
        },
        {
          id: 2,
          name: "Milk",
          price: 2.33,
          available: false,
        },
        {
          id: 3,
          name: "Butter",
          price: 0.99,
          available: true,
        },
        {
          id: 4,
          name: "Meat",
          price: 5.55,
          available: false,
        },
      ],
    };
  },
  components: {
    ProductDetails,
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
