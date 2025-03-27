<template>
  <section class="sales-cart">
    <h1 class="section-title">Özel Kampanyalar</h1>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :loop="true"
      navigation
      class="sales-slider"
    >
      <swiper-slide v-for="sale in sales" :key="sale.id" class="sales-card">
        <router-link :to="'/products'" class="sales-link">
          <div class="sales-card-inner">
            <div class="image-container">
              <img :src="sale.image" :alt="sale.name" class="sales-image" />
            </div>
            <div class="overlay">
              <h3 class="sales-title">{{ sale.name }}</h3>
              <p class="sales-description">Süper fırsatlar seni bekliyor!</p>
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";

export default {
  name: "SalesCart",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      sales: [
        { id: 1, name: "Mega İndirimler", image: require("@/assets/indirim.jpg") },
        { id: 2, name: "Yeni Sezon Ürünleri", image: require("@/assets/yeniurun.jpg") },
        { id: 3, name: "Garantili Ürünler", image: require("@/assets/garanti.jpg") },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
};
</script>

<style scoped>

.sales-cart {
  width: 80%;
  margin: 50px auto;
  padding: 40px;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}


.sales-slider {
  width: 100%;
  padding: 0;
  position: relative;
}


.sales-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px; 
  overflow: hidden;
}

.sales-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}


.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sales-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease-in-out;
}


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease;
  border-radius: 20px;
}

.sales-title {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
}

.sales-description {
  font-size: 1.2rem;
  color: #ddd;
}


.swiper-button-prev,
.swiper-button-next {
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 50%;
  transition: background 0.3s ease, transform 0.2s ease;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}


@media (max-width: 768px) {
  .sales-cart {
    width: 95%;
    padding: 20px;
  }

  .section-title {
    font-size: 2rem;
  }

  .sales-title {
    font-size: 1.5rem;
  }

  .sales-description {
    font-size: 1rem;
  }

  .sales-card {
    height: 300px; 
  }

  .swiper-button-prev,
  .swiper-button-next {
    padding: 10px;
    font-size: 1rem;
  }
}
</style>
