<template>
  <div>
    <Header />
    <Products />
  </div>
</template>

<script>
import Products from "../components/Products.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    Products,
    Header
  },
};
</script>
