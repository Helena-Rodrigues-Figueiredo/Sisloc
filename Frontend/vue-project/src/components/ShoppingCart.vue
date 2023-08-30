<template>
  <div class="cart-container">
    <h1 class="cart-title">Carrinho</h1>
    <div class="cart-item" v-for="(item, index) in cartItems" :key="item.id">
      <img :src="item.Product.image" :alt="item.Product.name" />
      <h2>{{ item.Product.name }}</h2>
      <p>Quantidade: {{ item.quantity }}</p>
      <p>Valor: R$ {{ item.total_price }},00</p>
      <div class="cart-btns">
        <button @click="decrementQuantity(item.product_id)">
          <font-awesome-icon :icon="['fas', 'minus']" />
        </button>
        <button @click="incrementQuantity(item.product_id)">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </div>
      <button class="trash" @click="deleteProduct(item.product_id)">
        <font-awesome-icon :icon="['fas', 'trash']" />
        <span class="cart-item-count">{{ cartItemCount }}</span>
      </button>
    </div>
    <div class="cart-total">
      <p>Total: R${{ calculateTotal() }},00</p>
    </div>
  </div>
</template>

<script>
import http from "../services/http";
import jwtDecode from "jwt-decode";

export default {
  name: "ShoppingCartView",
  data() {
    return {
      cartItems: [],
    };
  },

  methods: {
    async getShoppingCartItems() {
      try {
        const token = JSON.parse(localStorage.getItem("userData")).token;
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        const response = await http.get(`/cart/${userId}`);
        this.cartItems = response.data;
      } catch (error) {
        console.error("Error fetching cart items:", error.response);
      }
    },

    async incrementQuantity(index) {
      try {
        const token = JSON.parse(localStorage.getItem("userData")).token;
        const userId = jwtDecode(token).userId;
        const response = await http.post("/cart/add", {
          userId,
          productId: index,
        });
        if (response.status === 201) {
          this.getShoppingCartItems();
        }
      } catch (error) {
        console.error("Error adding product to cart:", error.response);
      }
    },
    async decrementQuantity(index) {
      try {
        const token = JSON.parse(localStorage.getItem("userData")).token;
        const userId = jwtDecode(token).userId;
        const response = await http.post("/cart/remove", {
          userId,
          productId: index,
        });
        if (response.status === 200) {
          this.getShoppingCartItems();
        }
      } catch (error) {
        console.error("Error adding product to cart:", error.response);
      }
    },
    async deleteProduct(index) {
      try {
        const token = JSON.parse(localStorage.getItem("userData")).token;
        const userId = jwtDecode(token).userId;
        const response = await http.delete(`/cart/${index}`, {
          userId,
        });
        if (response.status === 200) {
          this.getShoppingCartItems();
        }
      } catch (error) {
        console.error("Error deleting product to cart:", error.response);
      }
    },
    calculateTotal() {
      let total = 0;
      for (const item of this.cartItems) {
        total += item.total_price;
      }
      return total;
    },
  },

  mounted() {
    this.getShoppingCartItems();
  },
};
</script>

<style scoped>
.cart-container {
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.cart-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
}

.cart-item img {
  max-width: 100px;
  height: auto;
}

.cart-item button {
  padding: 5px 10px;
  background-color: rgb(88, 5, 121);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.cart-btns {
  display: flex;
  gap: 3px;
}

.cart-total {
  text-align: right;
  font-size: 18px;
  font-weight: 600;
  color: white;
}

@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    text-align: center;
    margin: 0 auto 20px;
    
  }

  .cart-item img {
    margin-bottom: 10px;
    max-width: 10rem;
  }
  
.cart-item button {
  margin: 1rem auto 0;
}
}
</style>
