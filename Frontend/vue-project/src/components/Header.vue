<template>
  <nav class="navbar">
    <div class="navbar-content">
      <h1 class="logo" @click="backToProductsPage">E-commerce</h1>
      <div class="user-options">
        <p class="user-name">Olá, {{ name }}</p>
        <button
          v-if="showCartButton"
          @click="goToCart"
          class="btn btn-secondary"
        >
          <font-awesome-icon :icon="['fas', 'fa-cart-shopping']" />
          <span class="cart-item-count">{{ itensOnCart }}</span>
        </button>
        <button @click="logout" class="btn btn-primary">
          <font-awesome-icon :icon="['fas', 'fa-right-from-bracket']" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import http from "../services/http";
import jwtDecode from "jwt-decode";

export default {
  name: "Header",
  data() {
    return {
      name: "",
      itensOnCart: 0,
    };
  },
  computed: {
    showCartButton() {
      return this.$route.path !== "/cart";
    },
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },

    logout() {
      this.$router.push("/");
      localStorage.removeItem("userData");
    },

    backToProductsPage() {
      this.$router.push("/products");
    },

    async getShoppingCartItems() {
      try {
        const token = JSON.parse(localStorage.getItem("userData")).token;
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        const response = await http.get(`/cart/${userId}`);
        let itens = 0;
        response.data.forEach((item) => {
          itens += item.quantity;
        });
        this.itensOnCart = itens;
      } catch (error) {
        console.error("Error fetching cart items:", error.response);
      }
    },
  },
  mounted() {
    const userName = JSON.parse(localStorage.getItem("userData"));
    this.name = userName.name;
    this.getShoppingCartItems();
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  opacity: 0.9;
  position: fixed;
  width: 100%;
  top: 0;
}

.logo {
  cursor: pointer;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
}

.user-options {
  display: flex;
  align-items: center;
}

.user-name {
  margin: 0 15px;
  text-transform: uppercase;
  font-weight: 900;
}

.btn {
  margin-left: 1rem;
  background-color: rgb(188, 112, 218);
  color: white;
  padding: 5px 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.cart-item-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 1px 5px;
  font-size: 11px;
  position: absolute;
  top: 10px;
  right: 70px;
}

@media (max-width: 768px) {
  .user-name {
    margin: 0 10px;
  }

  .btn {
    margin: 0 5px;
  }
}

@media (max-width: 480px) {
  .user-name {
    display: none;
  }
}
</style>
