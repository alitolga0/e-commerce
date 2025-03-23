<template>
  <div>
    <div>
      <myNavbar/>
    </div>
  
  <div class="account-container">
    <div class="account-header">
      <h2>Kullanıcı Hesabım</h2>
    </div>

  
    <div class="profile-section">
      <div class="profile-photo">
        <img :src="user.profilePhoto" alt="Profil Fotoğrafı" />
      </div>
      <div class="account-info">
        <h3>{{ user.name }}</h3>
        <p><strong>E-posta:</strong> {{ user.email }}</p>
        <p><strong>Telefon:</strong> {{ user.phone }}</p>
      </div>
    </div>

   
    <div class="account-section">
      <h3>Geçmiş Siparişlerim</h3>
      <ul>
        <li v-for="order in user.orders" :key="order.id">
          {{ order.orderNumber }} - {{ order.date }}
        </li>
      </ul>
    </div>

   
    <div class="account-section">
      <h3>Kargo Takip</h3>
      <ul>
        <li v-for="tracking in user.trackings" :key="tracking.trackingNumber">
          Takip No: {{ tracking.trackingNumber }} - Durum: {{ tracking.status }}
        </li>
      </ul>
    </div>

  
    <div class="account-section">
      <h3>Ayarlar</h3>
      <button class="edit-button">Hesap Bilgilerini Düzenle</button>
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
      user: {
        profilePhoto: require('@/assets/avatar.png'),
        name: 'Tolga', 
        email: 'Tolga@example.com', 
        phone: '+90 000 000 0000', 
        orders: [
          { id: 1, orderNumber: 'Sipariş #12345', date: '15 Mart 2025' },
          { id: 2, orderNumber: 'Sipariş #12344', date: '10 Mart 2025' },
          { id: 3, orderNumber: 'Sipariş #12343', date: '5 Mart 2025' },
        ],
        trackings: [
          { trackingNumber: 'AB123456789TR', status: 'Teslim Edildi' },
          { trackingNumber: 'XY987654321TR', status: 'Yolda' },
          { trackingNumber: 'UV135792468TR', status: 'Hazırlanıyor' },
        ]
      }
    };
  },
};
</script>

<style scoped>
.account-container {
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 30px auto;
}

.account-header {
  text-align: center;
  margin-bottom: 40px;
}

.account-header h2 {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  letter-spacing: 0.5px;
}

.profile-section {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
}

.profile-section:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.profile-photo {
  flex: 0 0 150px;
  margin-right: 20px;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.account-info h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.account-info p {
  font-size: 16px;
  color: #666;
}

.account-section {
  margin-bottom: 25px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.account-section h3 {
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.account-section ul {
  list-style-type: none;
  padding: 0;
}

.account-section ul li {
  margin-bottom: 10px;
  font-size: 16px;
  color: #555;
  transition: color 0.2s ease;
}

.account-section ul li:hover {
  color: #45a049;
}

.edit-button {
  padding: 12px 25px;
  background-color: #45a049;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .account-container {
    padding: 15px;
  }

  .account-header h2 {
    font-size: 24px;
  }

  .profile-section {
    flex-direction: column;
    align-items: center;
  }

  .profile-photo {
    margin-bottom: 20px;
  }

  .account-info h3 {
    font-size: 20px;
  }

  .account-info p {
    font-size: 14px;
  }

  .account-section ul li {
    font-size: 14px;
  }

  .edit-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
