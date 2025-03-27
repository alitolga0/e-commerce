<template>
  <swiper
    :slidesPerView="slidesPerView"
    :spaceBetween="20"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    class="mySwiper"
    ref="swiper"
  >
    <swiper-slide v-for="sale in sales" :key="sale.id">
      <div class="sales-card">
        <router-link :to="'/products'">
          <img :src="sale.image" :alt="sale.title" class="sales-image" />
          <h3>{{ truncateText(sale.title, 20) }}</h3>
          <p>{{ sale.price }} ₺</p>
        </router-link>
        <button @click="addToCart(sale)" class="add-to-cart-btn">
          <font-awesome-icon :icon="['fas', 'shopping-cart']" />
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination } from "swiper";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart);
SwiperCore.use([Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    FontAwesomeIcon,
  },
  name:"myFavorites",
  data() {
    return {
      slidesPerView: 5, 
      sales: [],
      cart: [],
      swiperInstance: null,
      autoplayInterval: null,
    };
  },
  methods: {
    async fetchSales() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        this.sales = data.slice(+10);
      } catch (error) {
        console.error("Ürünler yüklenirken hata oluştu:", error);
      }
    },
    onSwiper(swiper) {
      this.swiperInstance = swiper;
      this.startAutoplay();
    },
    startAutoplay() {
      if (this.autoplayInterval) clearInterval(this.autoplayInterval);
      this.autoplayInterval = setInterval(() => {
        if (this.swiperInstance) {
          this.swiperInstance.slideNext();
        }
      }, 3000);
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
        this.autoplayInterval = null;
      }
    },
    addToCart(product) {
      this.cart.push(product);
      localStorage.setItem("cart", JSON.stringify(this.cart));
     
    },
    updateSlidesPerView() {
      if (window.innerWidth <= 768) {
        this.slidesPerView = 1;
      } else if (window.innerWidth <= 1024) {
        this.slidesPerView = 3;
      } else {
        this.slidesPerView = 5;
      }
    },
    truncateText(text, maxLength) {
      return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    },
  },
  async mounted() {
    this.updateSlidesPerView();
    window.addEventListener("resize", this.updateSlidesPerView);
    await this.fetchSales();
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  },
  beforeUnmount() {
    this.stopAutoplay();
    window.removeEventListener("resize", this.updateSlidesPerView);
  },
};
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
  margin-top: 20px;
}

.sales-card {
  background-color: #fff;
  border: 1px solid #ddd;
  width: 230px;
  height: 350px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.sales-image {
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 8px;
  background-color: white;
}

button.add-to-cart-btn {
  background-color: #45a049;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button.add-to-cart-btn:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .sales-card {
    width: 100%;
    height: auto;
  }
}
</style>
