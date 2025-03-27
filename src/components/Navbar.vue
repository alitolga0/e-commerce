<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <h3 class="logo-text">n22</h3>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Aradığınız ürün" />
      </div>
      <div class="icons">
        <router-link to="/" class="home-icon">
          <i class="fas fa-home"></i>
        </router-link>
        <router-link to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
        <router-link to="/account"><i class="fas fa-user"></i></router-link>
        <router-link to="/login"><i class="fas fa-sign-in-alt"></i></router-link>
      
        <button class="toggle-button" @click="toggleMenu">
          <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>
    </div>
    <div v-if="isMobileMenuOpen" class="overlay" @click="toggleMenu"></div>
    
    <ul :class="['nav-links', { 'mobile-menu': isMobileMenuOpen }]">
      <li v-for="category in categories" :key="category">
        <router-link :to="{ path: '/products', query: { category: category } }" class="nav-link">
          {{ category }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "myNavbar",
  data() {
    return {
      isMobileMenuOpen: false,
      categories: [] 
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "auto";
    },
    async fetchCategories() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        this.categories = data;
      } catch (error) {
        console.error("Kategoriler yüklenirken hata oluştu:", error);
      }
    }
  },
  mounted() {
    this.fetchCategories();
  }
};
</script>

<style scoped>
.navbar {
  background-color: #45a049; 
  color: #fff; 
  padding: 15px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 100;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.search-bar input {
  padding: 8px;
  border-radius: 5px;
  border: none;
  width: 70%;
}
.icons {
  display: flex;
  align-items: center;
  gap: 15px;
}
a {
  text-decoration: none;
}
.icons i {
  font-size: 20px;
  color: #fff; 
  cursor: pointer;
  transition: color 0.3s;
}
.icons i:hover {
  color: #45a049; 
}

.toggle-button {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;
}

.nav-links li {
  padding: 15px;
  border-radius: 5px;
  transition: background 0.3s;
  font-size: 18px;
  text-align: center;
  position: relative;
}
.nav-links li:hover {
  background: rgba(69, 160, 73, 0.2);
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.nav-link {
  display: inline-block;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff; 
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.logo {
  color: #fff; 
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.home-icon i {
  font-size: 20px;
  color: #fff; 
}

@media (max-width: 768px) {
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 5;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    background-color: #45a049; 
    position: fixed;
    width: 80%;
    left: 10%;
    top: 60px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 20;
    border-radius: 10px;
  }

  .mobile-menu {
    display: flex;
  }

  .toggle-button {
    display: block;
  }

  .nav-links li {
    margin-bottom: 10px;
    padding: 20px;
    font-size: 20px;
  }
}
</style>
