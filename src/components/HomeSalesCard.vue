<template>
  <swiper
    :slidesPerView="slidesPerView"
    :spaceBetween="30"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    class="mySwiper"
    ref="swiper"
  >
    <swiper-slide v-for="sale in sales" :key="sale.id">
      <div class="sales-card">
        <router-link :to="'/products'">
          <img :src="sale.image" :alt="sale.name" class="sales-image" />
          <h3>{{ sale.name }}</h3>
          <p>{{ sale.pricename }} ₺</p>
        </router-link>
        <button @click="addToCart(sale)" class="add-to-cart-btn">Sepete Ekle</button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slidesPerView: 4,
      sales: [
        { id: 1, name: 'Makine', image: require('@/assets/eşya.jpg'), pricename: "100" },
        { id: 2, name: 'PC', image: require('@/assets/bilgisayar.jpg'), pricename: "2500" },
        { id: 3, name: 'Tablet', image: require('@/assets/tablet.jpg'), pricename: "1500" },
        { id: 4, name: 'Telefon', image: require('@/assets/telefon.jpg'), pricename: "2000" },
        { id: 5, name: 'Makine', image: require('@/assets/eşya.jpg'), pricename: "300" },
        { id: 6, name: 'PC', image: require('@/assets/bilgisayar.jpg'), pricename: "4000" },
        { id: 7, name: 'Tablet', image: require('@/assets/tablet.jpg'), pricename: "1200" },
        { id: 8, name: 'Telefon', image: require('@/assets/telefon.jpg'), pricename: "1800" },
      ],
      swiperInstance: null, 
      autoplayInterval: null, 
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper; 
      this.startAutoplay(); 
    },
    startAutoplay() {
     
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
      }

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
      alert(`${product.name} sepete eklendi!`);
    },
    updateSlidesPerView() {
      if (window.innerWidth <= 768) {
        this.slidesPerView = 1;
      } else if (window.innerWidth <= 1024) {
        this.slidesPerView = 3;
      } else {
        this.slidesPerView = 4;
      }
    },
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView);
  },
  beforeUnmount() {
    
    this.stopAutoplay();
    window.removeEventListener('resize', this.updateSlidesPerView);
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
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.sales-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

button.add-to-cart-btn {
  background-color: #45a049;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button.add-to-cart-btn:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .sales-card {
    flex: 1 1 100%;
  }
}
</style>