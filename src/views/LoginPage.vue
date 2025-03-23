<template>
  <div class="container">
    <div class="slider-container" :class="{ 'right-panel-active': isSignUp }">
      <div class="form-container login">
        <form @submit.prevent="login('user')">
          <h2>Giriş Yap</h2>
          <input type="email" placeholder="E-posta" v-model="email" required />
          <input type="password" placeholder="Şifre" v-model="password" required />
          <router-link to="/home">
            <button type="button">Giriş Yap</button>
          </router-link>
        </form>
        <button class="ghost" @click="togglePanel(true)">Üye Ol</button>
      </div>
      <div class="form-container signup">
        <form @submit.prevent="signUp('user')">
          <h2>Üye Ol</h2>
          <input type="email" placeholder="E-posta" v-model="email" required />
          <input type="password" placeholder="Şifre" v-model="password" required />
          <input type="password" placeholder="Şifreyi Tekrar Girin" v-model="confirmPassword" required />
          <button type="submit">Üye Ol</button>
        </form>
        <button class="ghost" @click="togglePanel(false)">Giriş Yap</button>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left" v-if="isSignUp">
            <h2>Üye Ol</h2>
            <p>Hesabınız yoksa, üye olmak için bilgilerinizi girin.</p>
            <button class="ghost" @click="togglePanel(false)">Giriş Yap</button>
          </div>
          <div class="overlay-panel overlay-right" v-if="!isSignUp">
            <h2>Giriş Yap</h2>
            <p>Hesabınıza giriş yapmak için bilgilerinizi girin.</p>
            <button class="ghost" @click="togglePanel(true)">Üye Ol</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSignUp: false,
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    togglePanel(isSignUp) {
      this.isSignUp = isSignUp;
    },
    login(type) {
      console.log(`${type} girişi yapıldı!`, this.email, this.password);
    },
    signUp(type) {
      if (this.password !== this.confirmPassword) {
        alert("Şifreler uyuşmuyor!");
        return;
      }
      console.log(`${type} kaydı yapıldı!`, this.email, this.password);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #4caf50, #81c784);
  font-family: 'Poppins', sans-serif;
}

.slider-container {
  position: relative;
  width: 900px;
  max-width: 100%;
  min-height: 500px;
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.6s ease-in-out;
}

.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.right-panel-active .form-container.login {
  transform: translateX(-100%);
  opacity: 0;
}

.right-panel-active .form-container.signup {
  transform: translateX(0);
  opacity: 1;
}

.form-container {
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
}

input {
  width: 80%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
}

button {
  margin-top: 15px;
  padding: 12px 25px;
  border: none;
  background: #e53935;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  transition: 0.3s;
}

button:hover {
  background: #c62828;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  background: #ff7043;
}

.overlay {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 50px;
  color: white;
}

.ghost {
  background: transparent;
  border: 2px solid white;
  padding: 10px 20px;
  cursor: pointer;
  color: white;
  border-radius: 8px;
  transition: 0.3s;
}

.ghost:hover {
  background: white;
  color: #e53935;
}


@media (max-width: 768px) {
  .slider-container {
    width: 90%;
    min-height: 400px;
  }

  .form-container {
    padding: 20px;
  }

  input {
    width: 90%;
    font-size: 14px;
  }

  button {
    padding: 10px 20px;
    font-size: 14px;
  }

  .overlay {
    padding: 20px;
  }

  .overlay h2 {
    font-size: 1.5rem;
  }

  .overlay p {
    font-size: 0.9rem;
  }

  .ghost {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>