<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h1 class="logo">E-commerce</h1>
      <div class="form-group">
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="Insira seu email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="Insira sua senha"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
      <div class="form-group">
        <button type="button" @click="registerUser" class="btn btn-link">
          Cadastre-se
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import http from "../services/http";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const content = { password: this.password, email: this.email };
        const data = await http.post("/", content);

        if (data?.status === 200) {
          localStorage.setItem("userData", JSON.stringify(data.data));
          this.$router.push("/products");
        }
      } catch (error) {
        alert(error?.response?.data.message);
      }
    },
    registerUser() {
      this.$router.push("/user");
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-form {
  max-width: 400px;
  width: 90%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
}

.logo {
  text-align: center;
  margin-bottom: 20px;
  color: rgb(152, 48, 194);
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: rgb(152, 48, 194);
  border: none;
  color: white;
}

.btn-link {
  color: rgb(152, 48, 194);
  border: 1px solid rgb(152, 48, 194);
}
</style>
