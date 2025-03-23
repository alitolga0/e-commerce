<template>
  <div>
  
    <nav class="navbar">
      <div class="navbar-container">
      
        <div class="logo">
          <h1>n22</h1>
        </div>
        
        
        <div class="search-container">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Ürün ara..."
            class="search-input"
          />
        </div>

     
        <div class="toggle-btn" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

       
        <ul class="navbar-links" :class="{ 'active': isMenuOpen }">
          <li><router-link to="/">Ana Sayfa</router-link></li>
          <li><router-link to="/products">Ürünler</router-link></li>
          <li><router-link to="/cart">Sepet</router-link></li>
          <li><router-link to="/categories">Kategoriler</router-link></li>
          <li><router-link to="/account">Hesap</router-link></li>
          <li><router-link to="/login">Giriş Yap</router-link></li>
        </ul>
      </div>
    </nav>

    
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
name: "myNavbar",
data() {
  return {
    isMenuOpen: false,
    searchQuery: "",
  };
},
methods: {
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  },
  searchProduct() {
    if (this.searchQuery) {
      console.log("Arama yapılıyor:", this.searchQuery);
    } else {
      console.log("Lütfen aramak için bir kelime girin.");
    }
  },
},
};
</script>

<style scoped>
body, html {
margin: 0;
padding: 0;
width: 100%;
height: 100%;
overflow-x: hidden;
}

.navbar {
background-color: #f7f7f7;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-container {
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
}

.logo h1 {
color: #0067b8;
font-size: 24px;
margin: 0;
}

.toggle-btn {
display: none;
cursor: pointer;
}

.toggle-btn .bar {
width: 25px;
height: 3px;
margin: 5px 0;
background-color: #262626;
}

.search-container {
display: flex;
align-items: center;
flex-grow: 1;
justify-content: center;
}

.search-input {
padding: 8px;
font-size: 18px;
border: 1px solid #262626;
border-radius: 4px;
outline: none;
}

.navbar-links {
list-style-type: none;
display: flex;
margin: 0;
padding: 0;
}

.navbar-links li {
margin: 0 20px;
}

.navbar-links a {
color: #262626;
text-decoration: none;
font-size: 18px;
transition: color 0.3s;
}

.navbar-links a:hover {
color: #0067b8;
}

@media (max-width: 768px) {
.navbar-container {
  flex-direction: row;
  justify-content: space-between;
}

.search-container {
  width: 100%;
  justify-content: center;
}

.search-input {
  width: 150px;
  font-size: 14px;
}

.toggle-btn {
  display: block;
  z-index: 10;
}

.navbar-links {
  position: fixed;
  top: 0;
  left: 100%;
  width: 80%;
  height: 100vh;
  background-color: #f7f7f7;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  padding-left: 20px;
  padding-top: 60px;
}

.navbar-links.active {
  transform: translateX(-100%);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
}
</style>