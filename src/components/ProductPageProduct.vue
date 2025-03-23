<template>
  <section class="sales-cart">
    <div class="sales-list">
      <div v-for="sale in sales" :key="sale.id" class="sales-card">
        <router-link :to="'/products'" class="product-link">
          <img :src="sale.image" :alt="sale.name" class="sales-image" />
          <div class="product-info">
            <h3>{{ sale.name }}</h3>
            <p class="price">{{ sale.pricename }} ₺</p>
          </div>
        </router-link>
        <button @click="addToCart(sale)" class="add-to-cart-btn">
          Sepete Ekle
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductCart',
  data() {
    return {
      sales: [
        { id: 1, name: 'Makine', image: require('@/assets/eşya.jpg'), pricename: "100" },
        { id: 2, name: 'PC', image: require('@/assets/bilgisayar.jpg'), pricename: "2500" },
        { id: 3, name: 'Tablet', image: require('@/assets/tablet.jpg'), pricename: "1500" },
        { id: 4, name: 'Telefon', image: require('@/assets/telefon.jpg'), pricename: "2000" },
        { id: 5, name: 'Makine', image: require('@/assets/eşya.jpg'), pricename: "300" },
        { id: 6, name: 'PC', image: require('@/assets/bilgisayar.jpg'), pricename: "4000" },
        { id: 7, name: 'Tablet', image: require('@/assets/tablet.jpg'), pricename: "1200" },
        { id: 8, name: 'Telefon', image: require('@/assets/telefon.jpg'), pricename: "1800" },
        { id: 9, name: 'Makine', image: require('@/assets/eşya.jpg'), pricename: "250" },
        { id: 10, name: 'PC', image: require('@/assets/bilgisayar.jpg'), pricename: "3500" },
        { id: 11, name: 'Tablet', image: require('@/assets/tablet.jpg'), pricename: "1400" },
        { id: 12, name: 'Telefon', image: require('@/assets/telefon.jpg'), pricename: "2200" },
        { id: 13, name: 'Makine', image: require('@/assets/eşya.jpg'), pricename: "900" },
        { id: 14, name: 'PC', image: require('@/assets/bilgisayar.jpg'), pricename: "4800" },
        { id: 15, name: 'Tablet', image: require('@/assets/tablet.jpg'), pricename: "1600" },
        { id: 16, name: 'Telefon', image: require('@/assets/telefon.jpg'), pricename: "2100" },
      ],
    };
  },
  methods: {
    addToCart(product) {
      alert(`${product.name} sepete eklendi!`);
    },
  },
};
</script>

<style scoped>
.sales-cart {
  padding: 40px;
  text-align: center;
  
}

.sales-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  justify-content: center;
 
}

.sales-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

.sales-card:hover {
  transform: translateY(-10px);
}

.product-link {
  text-decoration: none;
  color: inherit;
}

.sales-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.product-info {
  margin-top: 10px;
}

h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
}

.price {
  font-size: 1.1rem;
  color: #333;
  margin-top: 5px;
  font-weight: bold;
}

.add-to-cart-btn {
  background-color: #45a049;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.add-to-cart-btn:hover {
  background-color: #38a134;
}

@media (max-width: 768px) {
  .sales-card {
    padding: 15px;
  }

  .sales-image {
    height: 120px;
  }

  .product-info {
    margin-top: 5px;
  }

  .price {
    font-size: 1rem;
  }

  h3 {
    font-size: 1rem;
  }
}
</style>
