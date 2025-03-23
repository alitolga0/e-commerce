<template>
  <div>
    <div>
      <myNavbar />
    </div>
    <div>
      <productCart />
    </div>
    <div>
      <myFooter/>
    </div>
  </div>
</template>

<script>

import myNavbar from '../components/Navbar.vue';
import productCart from '../components/ProductPageProduct.vue';
import myFooter from '../components/Footer.vue';

export default {
  components: {
    myNavbar,
    productCart,
    myFooter
    
  },
};
</script>

<style scoped>
.home-content {
  text-align: center;
  margin-top: 50px;
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
