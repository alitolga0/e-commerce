<template>
  <div class="products-page">
    <h2>{{ selectedCategory ? selectedCategory : "Tüm Ürünler" }}</h2>

    <div class="products-container">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <img :src="product.image" :alt="product.title" />
        <h3>{{ shortenTitle(product.title) }}</h3>
        <p class="price">{{ product.price }} TL</p>
        <button @click="addToCart(product)" class="add-to-cart-btn">
          <font-awesome-icon :icon="['fas', 'shopping-cart']" />
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 


library.add(faShoppingCart);

export default {
  name: "ProductPageProduct",
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      products: [],
      selectedCategory: this.$route.query.category || null, // URL'den category alıyoruz
    };
  },

  methods: {
    
    async fetchProducts() {
      try {
        let url = "https://fakestoreapi.com/products"; 
        
        if (this.selectedCategory) {
          url = `https://fakestoreapi.com/products/category/${this.selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error("Ürünler yüklenirken hata oluştu:", error);
      }
    },

    shortenTitle(title) {
      // Uzun başlıkları kısaltmak için yardımcı fonksiyon
      return title.length > 20 ? title.substring(0, 18) + "..." : title;
    },

   
    addToCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      
      const productIndex = cart.findIndex(item => item.id === product.id);
      
      if (productIndex === -1) {
        cart.push({...product, quantity: 1});
      } else {
        cart[productIndex].quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(`${product.title} sepete eklendi!`);
    }
  },

 
  watch: {
    "$route.query.category"(newCategory) {
      this.selectedCategory = newCategory;
      this.fetchProducts();
    }
  },

 
  mounted() {
    this.fetchProducts();
  }
};
</script>



<style scoped>
.products-page {
  padding: 20px;
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
}

.product-card {
  width: 220px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 100px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 10px;
}

.product-card h3 {
  font-size: 14px;
  color: #333;
  text-align: center;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #45a049;
  margin-bottom: 10px;
}

.add-to-cart-btn {
  background-color: #45a049;
  color: white;
  padding: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
}

.add-to-cart-btn:hover {
  background-color: #368a3e;
  transform: scale(1.05);
}

.add-to-cart-btn svg {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .products-container {
    flex-direction: column;
    align-items: center;
  }

  .product-card {
    width: 90%;
  }
}
</style>
