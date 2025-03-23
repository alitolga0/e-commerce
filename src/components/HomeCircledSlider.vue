<template>
    <section class="sales-cart">
      <h1>Sana Özel Kampanyalarımız</h1>
      <div class="sales-list">
        <div v-for="sale in sales" :key="sale.id" class="sales-card">
      
          <router-link :to="'/products' ">
            <img :src="sale.image" :alt="sale.name" class="sales-image" />
            <h3>{{ sale.name }}</h3>
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SalesCart',
    data() {
      return {
        sales: [
          {
            id: 1,
            name: 'İndirim',
            image: require('@/assets/indirim.jpg'),
           
          },
          {
            id: 2,
            name: 'Yeni Ürünler',
            image: require('@/assets/yeniurun.jpg'),
         
          },
          {
            id: 3,
            name: 'Garantili Ürünler',
            image: require('@/assets/garanti.jpg'),
           
          },
          {
            id: 4,
            name: 'İndirim',
            image: require('@/assets/indirim.jpg'),
           
          },
          {
            id: 5,
            name: 'Yeni Ürünler',
            image: require('@/assets/yeniurun.jpg'),
         
          },
          {
            id: 6,
            name: 'Garantili Ürünler',
            image: require('@/assets/garanti.jpg'),
           
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .sales-cart {
    padding: 40px;
    text-align: center;
    
  }
  
  .sales-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    
  }
  
  .sales-card {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 250px;
    margin: 0 auto;
    
   
  }
  
  .sales-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  h3 {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
   
  }
  
  h1{
    margin-top: 10px;
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    color: #777;
    font-size: 0.9rem;
    margin-top: 5px;
  }
  
  
  @media (max-width: 768px) {
    .sales-list {
      grid-template-columns: 1fr;
    }
  }
  
  router-link {

    text-decoration: none; 
    color: inherit; 
    
  }
  a{
    text-decoration: none; 
}
  </style>
  