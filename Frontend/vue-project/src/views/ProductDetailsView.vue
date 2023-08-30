<template>
  <div>
    <Header />
    <ProductDetails />
  </div>
  </template>
  
  <script>
  import ProductDetails from "../components/ProductDetails.vue";
  import Header from "../components/Header.vue";
  
  export default {
    components: {
        ProductDetails,
        Header
    },
  };
  </script>