<template>
  <div>
    <Header />
    <ShoppingCart />
  </div>
</template>

<script>
import ShoppingCart from "../components/ShoppingCart.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    ShoppingCart,
    Header
  },
};
</script>
