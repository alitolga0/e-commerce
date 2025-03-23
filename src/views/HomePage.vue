<template>
  <div>
    <myNavbar />
    <div class="home-content">
      <div>
        <homeSlider />
      </div>
      <div  >
        <h2>Size Önerilerimiz</h2>
        <div class="slider">
        <div >
          <SalesCart />
        </div>
        <div >
          <SalesCart />
        </div>
      </div>
      </div>
    </div>
    <div>
      <myFooter />
    </div>
  </div>
</template>

<script>

import myNavbar from '../components/Navbar.vue';
import myFooter from '../components/Footer.vue';
import homeSlider from '../components/HomeCircledSlider.vue';
import SalesCart from '../components/HomeSalesCard.vue';

export default {
  components: {
    myNavbar,
    homeSlider,
    SalesCart,
    myFooter,
  },
};
</script>

<style scoped>

.slider{
  border-top: 1px solid #080808;
  
}
.home-content {
  text-align: center;
  margin-top: 50px;
}
h2{
    margin-top: 10px;
    font-size: 2rem;
    font-weight: bold;
  }

.home-content > div:first-child {
  width: 100%;
  overflow-x: hidden; 
  margin: 0 auto; 
}

.home-content h1 {
  font-size: 3em;
  color: #4CAF50;
}

.home-content p {
  font-size: 1.2em;
  color: #333;
}
</style>
