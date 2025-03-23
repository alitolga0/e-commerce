<template>
  <div>
    <myNavbar />
    <div class="cart-container">
      <h1>Sepetim</h1>
      <div class="cart-items">
        <div class="cart-item" v-for="(item, index) in cart" :key="index">
          <img :src="item.image" alt="Ürün Resmi" class="product-image" />
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p>Fiyat: {{ item.price }} TL</p>
            <p>Adet: {{ item.quantity }}</p>
          </div>
          <div class="item-total">
            <p><strong>Toplam: {{ item.price * item.quantity }} TL</strong></p>
          </div>
        </div>
      </div>
     
      <div class="cart-summary">
        <p class="total-price">
          <strong>Toplam Fiyat: {{ totalPrice }} TL</strong>
        </p>
        <button class="checkout-btn">Ödeme Yap</button>
      </div>
    </div>
  </div>
</template>

<script>
import myNavbar from "../components/Navbar.vue";

export default {
  components: {
    myNavbar,
 
  },
  data() {
    return {
      cart: [
        {
          name: "Ürün 1",
          price: 100,
          quantity: 1,
          image: require("@/assets/tablet.jpg"),
        },
        {
          name: "Ürün 2",
          price: 150,
          quantity: 2,
          image: require("@/assets/telefon.jpg"),
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
};
</script>

<style scoped>
.cart-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.cart-container h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
}

.cart-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cart-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  width: 45%;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 8px;
}

.item-info {
  flex-grow: 1;
}

.item-info h3 {
  font-size: 1.5rem;
  color: #333;
}

.item-info p {
  font-size: 1rem;
  color: #666;
}

.item-total p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4caf50;
}

.cart-summary {
  text-align: center;
  margin-top: 30px;
}

.total-price {
  font-size: 1.5rem;
  color: #4caf50;
  margin-bottom: 20px;
}

.checkout-btn {
  padding: 12px 30px;
  font-size: 1.2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .cart-item {
    width: 100%;
    margin-bottom: 20px;
  }

  .product-image {
    width: 80px;
    height: 80px;
  }

  .item-info h3 {
    font-size: 1.2rem;
  }

  .item-info p {
    font-size: 0.9rem;
  }

  .item-total p {
    font-size: 1rem;
  }

  .cart-summary .checkout-btn {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>
