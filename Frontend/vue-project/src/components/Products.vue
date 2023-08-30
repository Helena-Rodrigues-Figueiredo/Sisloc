<template>
  <div class="filter-section">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Filtrar pelo nome do produto"
    />
    <button @click="searchProducts">Pesquisar</button>
    <button @click="getProducts"><font-awesome-icon :icon="['fas', 'filter-circle-xmark']" /></button>
  </div>
  <div class="product-list">
    <div
      class="product-item"
      v-for="product in filteredProducts"
      :key="product.id"
    >
      <router-link :to="'/products/' + product.id" class="product-link">
        <img :src="product.image" :alt="product.item" class="product-image" />
        <h2 class="product-name">{{ product.item }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">Price: ${{ product.price }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import http from "../services/http";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      filteredProducts: [],
      searchQuery: "",
    };
  },

  methods: {
    async getProducts() {
      try {
        const response = await http.get("/products");
        this.products = response.data;
        this.filteredProducts = response.data;
      } catch (error) {
        console.error("Erro ao obter lista de produtos:", error.response);
      }
    },

    searchProducts() {
      const filteredProduct = this.products.filter((product) =>
        product.item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.filteredProducts = filteredProduct;
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.product-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.filter-section {
  display: flex;
  align-items: center;
  margin: 4rem auto 0;
  padding: 20px;
  max-width: 1200px;
}

.filter-section input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.filter-section button {
  padding: 10px 20px;
  background-color: rgb(115, 12, 156);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
}

.product-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  max-width: 350px;
}

.product-link {
  text-decoration: none;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.product-name {
  font-size: 18px;
  margin: 10px 0;
  color: white;
}

.product-description {
  margin: 10px 0;
  font-size: 14px;
}

.product-price {
  font-size: 14px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .filter-section {
    margin-top: 4rem;
  }

  .product-item {
    width: 45%;
  }
}
</style>
