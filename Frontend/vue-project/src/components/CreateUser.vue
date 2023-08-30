<template>
  <div class="register-container">
    <form @submit.prevent="createUser" class="register-form">
      <h1 class="logo">Faça seu cadastro</h1>
      <div class="form-group">
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          placeholder="Insira seu nome"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="Insira seu email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="Insira sua senha"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </div>
      <div class="form-group">
        <button type="button" @click="backToLoginPage" class="btn btn-link">
          Voltar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import http from "../services/http";

export default {
  name: "User",
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    async createUser() {
      const content = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      try {
        const result = await http.post("/user", content);
        localStorage.setItem("userData", JSON.stringify(result.data));
        this.$router.push("/products");
      } catch (error) {
        alert(error?.response?.data.message);
      }
    },
    backToLoginPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.register-form {
  max-width: 400px;
  width: 90%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
}

.form-group {
  margin-bottom: 15px;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
  color: rgb(152, 48, 194);
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
  color: white;
  border: 1px solid rgb(152, 48, 194);
}

.btn-link {
  color: rgb(152, 48, 194);
  border: 1px solid rgb(152, 48, 194);
}
</style>
