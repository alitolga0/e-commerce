<template>
  <section class="sales-cart">
    <h1>Sana Özel Kampanyalarımız</h1>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :loop="true"
      navigation
      class="sales-list"
    >
      <swiper-slide v-for="sale in sales" :key="sale.id" class="sales-card">
        <router-link :to="'/products'">
          <img :src="sale.image" :alt="sale.name" class="sales-image" />
          <h3>{{ sale.name }}</h3>
        </router-link>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';

export default {
  name: 'SalesCart',
  components: { Swiper, SwiperSlide },
  data() {
    return {
      sales: [
        { id: 1, name: 'İndirim', image: require('@/assets/indirim.jpg') },
        { id: 2, name: 'Yeni Ürünler', image: require('@/assets/yeniurun.jpg') },
        { id: 3, name: 'Garantili Ürünler', image: require('@/assets/garanti.jpg') },
        { id: 4, name: 'İndirim', image: require('@/assets/indirim.jpg') },
        { id: 5, name: 'Yeni Ürünler', image: require('@/assets/yeniurun.jpg') },
        { id: 6, name: 'Garantili Ürünler', image: require('@/assets/garanti.jpg') }
      ]
    };
  },
  setup() {
    return {
      modules: [Autoplay, Navigation]
    };
  }
};
</script>

<style scoped>
.sales-cart {
  width: 66%; 
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  position: relative;
  overflow: hidden; 
  border-radius: 15px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); 
}

.sales-list {
  width: 100%;
  overflow: hidden;
  padding: 10px;
}

.sales-card {
  
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  max-width: 100%;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sales-card:hover {
  transform: scale(1.05);
}

.sales-image {
  width: 100%;
  max-height: 250px; 
  object-fit: cover;
  border-radius: 8px;
}

h3 {
  margin-top: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

h1 {
  margin-top: 10px;
  font-size: 2rem;
  font-weight: bold;
  color: #4caf50; 
}


.swiper-button-prev,
.swiper-button-next {
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 50%;
  transition: background 0.3s ease, transform 0.2s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1); 
}


@media (max-width: 768px) {
  .sales-cart {
    width: 100%;
    padding: 20px;
  }

  .sales-card {
    padding: 15px;
  }

  .sales-image {
    max-height: 200px; 
  }

  h3 {
    font-size: 1.3rem; 
  }

  h1 {
    font-size: 1.6rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    padding: 10px; 
    font-size: 1rem;
  }
}


@media (max-width: 1024px) {
  .sales-cart {
    width: 90%; 
  }

  .swiper-button-prev,
  .swiper-button-next {
    padding: 12px; 
  }
}
</style>
