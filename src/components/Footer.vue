<template>
    <footer class="footer">
      <div class="footer-content">
       
        <div class="footer-section">
          
          <p>Şirket Adı: n22</p>
          <p>Adres: Örnek Mahalle, Örnek Sokak No: 123, İstanbul</p>
          <p>Telefon: +90 123 456 78 90</p>
          <p>Email: info@n22.com</p>
        </div>
  
        
        <div class="footer-section">
        
          <ul class="footer-links">
            <li><a href="#">Hakkında</a></li>
            <li><a href="#">İletişim</a></li>
            <li><a href="#">Gizlilik Politikası</a></li>
            <li><a href="#">Kullanım Şartları</a></li>
          </ul>
        </div>
      </div>
  
     
      <div class="footer-bottom">
        <p>&copy; 2025 Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'MyFooter',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #fff; 
    color: #333; 
    padding: 40px 20px 20px;
    font-size: 14px;
    border-top: 1px solid #ddd; 
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  
  .footer-section {
    flex: 1;
    min-width: 200px;
    margin: 10px 20px;
  }
  
  
  .footer-links {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li {
    margin: 10px 0;
  }
  
  .footer-links li a {
    color: #333; 
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-links li a:hover {
    color: #4caf50; 
  }
  
  .footer-bottom {
    text-align: center;
    border-top: 1px solid #080808; 
    padding-top: 20px;
    margin-top: 20px;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    .footer-section {
      margin: 10px 0;
    }
  }
  </style>