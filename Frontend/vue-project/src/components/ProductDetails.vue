<template>
  <div class="product-container">
    <div class="product-detail">
      <div class="product-image">
        <img :src="product.image" :alt="product.item" />
      </div>
      <div class="product-info">
        <h2 class="product-name">{{ product.item }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-technical-info">
          {{ product.technical_information }}
        </p>
        <p class="product-price">Price: ${{ product.price }}</p>
        <p class="product-daily-price">Diária: ${{ product.daily_price }}</p>
        <p class="product-weekly-price">Semanal: ${{ product.weekly_price }}</p>
        <p class="product-fortnightly-price">
          Quinzenal: ${{ product.fortnightly_price }}
        </p>
        <p class="product-monthly-price">
          Mensal: ${{ product.monthly_price }}
        </p>
        <button class="btn btn-primary" @click="addToCart">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
    <button class="btn btn-primary" @click="backToProductsPage">
      Retorne para a página de produtos
    </button>
  </div>
</template>

<script>
import http from "../services/http";
import jwtDecode from "jwt-decode";

export default {
  name: "ProductDetails",
  data() {
    return {
      product: [],
    };
  },
 
  methods: {
    async findProduct() {
      const productId = Number(this.$route.params.id);
      try {
        const response = await http.get("/products/");
        const data = response.data;

        this.product = data.find((product) => product.id === productId);
      } catch (error) {
        console.error("Error fetching product details:", error.response);
      }
    },
    async addToCart() {
      try {
        const token = JSON.parse(localStorage.getItem("userData")).token;
        const userId = jwtDecode(token).userId;
        const response = await http.post("/cart/add", {
          userId,
          productId: this.product.id,
        });
        if (response.status === 201) {
          alert("Produto adicionado ao carrinho!");
          location.reload();
        }
      } catch (error) {
        console.error("Error adding product to cart:", error.response);
      }
    },

    backToProductsPage() {
      this.$router.push("/products");
    },
  },

  mounted() {
    this.findProduct();
  },
};
</script>

<style scoped>
.product-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 1rem;
}

.product-detail {
  display: flex;
  max-width: 80vw;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgb(247, 245, 245);
}

.product-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.product-image img {
  max-width: 100%;
  height: auto;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 2;
  padding: 20px;
  gap: 0.5rem;
}

.product-name {
  font-size: 24px;
  margin: 0 0 10px;
  color: white;
}

.product-description {
  margin-bottom: 15px;
}

.product-price {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
}

.btn {
  padding: 10px 20px;
  background-color: rgb(115, 12, 156);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .product-container {
    margin-top: 5rem;
  }
  .product-detail {
    flex-direction: column;
  }

  .product-image,
  .product-info {
    padding: 10px;
  }
}
</style>
