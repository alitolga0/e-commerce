<template>
  <div>
    <div>   <myNavbar /></div>

  <div class="container">
    <div class="categories-container">
      
      <div class="category-panel">
        <h3>Ana Kategoriler</h3>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <button @click="selectCategory(category)">
              {{ category.name }}
            </button>
          </li>
        </ul>
      </div>

     
      <div class="category-panel">
        <h3 v-if="selectedCategory">Alt Kategoriler</h3>
        <ul v-if="selectedCategory">
          <li v-for="subCategory in selectedCategory.subCategories" :key="subCategory.id">
            <button @click="selectSubCategory(subCategory)">
              {{ subCategory.name }}
            </button>
          </li>
        </ul>
      </div>

      <!-- Alt-Alt Kategoriler -->
      <div class="category-panel">
        <h3 v-if="selectedSubCategory">Detaylı Kategoriler</h3>
        <ul v-if="selectedSubCategory">
          <li v-for="subSubCategory in selectedSubCategory.subCategories" :key="subSubCategory.id">
            <button @click="selectSubSubCategory(subSubCategory)">
              {{ subSubCategory.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer">
   <myFooter/>
  </div>
</div>
</template>

<script>
import myNavbar from "../components/Navbar.vue";
import myFooter from '../components/Footer.vue';
export default {
  components: {
    myNavbar,
    myFooter
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Elektronik",
          subCategories: [
            {
              id: 101,
              name: "Telefonlar",
              subCategories: [
                { id: 1001, name: "iPhone" },
                { id: 1002, name: "Samsung" },
                { id: 1003, name: "Xiaomi" },
                { id: 1004, name: "OnePlus" },
                { id: 1005, name: "Google Pixel" }
              ],
            },
            {
              id: 102,
              name: "Bilgisayarlar",
              subCategories: [
                { id: 2001, name: "Dizüstü" },
                { id: 2002, name: "Masaüstü" },
                { id: 2003, name: "Tabletler" },
                { id: 2004, name: "Gaming PC" },
                { id: 2005, name: "Aksesuarlar" }
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Beyaz Eşya",
          subCategories: [
            {
              id: 201,
              name: "Buzdolapları",
              subCategories: [
                { id: 3001, name: "No-Frost" },
                { id: 3002, name: "Çift Kapılı" },
                { id: 3003, name: "Mini Buzdolabı" },
                { id: 3004, name: "Derin Dondurucu" },
                { id: 3005, name: "Endüstriyel Soğutucu" }
              ],
            },
            {
              id: 202,
              name: "Çamaşır Makineleri",
              subCategories: [
                { id: 4001, name: "Önden Yüklemeli" },
                { id: 4002, name: "Üstten Yüklemeli" },
                { id: 4003, name: "Kurutmalı Çamaşır Makinesi" },
                { id: 4004, name: "Mini Çamaşır Makinesi" },
                { id: 4005, name: "Endüstriyel Çamaşır Makinesi" }
              ],
            },
          ],
        },
        {
          id: 3,
          name: "Mobilya",
          subCategories: [
            {
              id: 301,
              name: "Oturma Grupları",
              subCategories: [
                { id: 5001, name: "Koltuk Takımı" },
                { id: 5002, name: "Kanepe" },
                { id: 5003, name: "Berjer" },
                { id: 5004, name: "Puf" },
                { id: 5005, name: "TV Ünitesi" }
              ],
            },
            {
              id: 302,
              name: "Yatak Odası",
              subCategories: [
                { id: 6001, name: "Yatak" },
                { id: 6002, name: "Gardırop" },
                { id: 6003, name: "Komodin" },
                { id: 6004, name: "Şifonyer" },
                { id: 6005, name: "Makyaj Masası" }
              ],
            },
          ],
        },
        {
          id: 4,
          name: "Giyim & Moda",
          subCategories: [
            {
              id: 401,
              name: "Kadın",
              subCategories: [
                { id: 7001, name: "Elbiseler" },
                { id: 7002, name: "Pantolon" },
                { id: 7003, name: "Ayakkabı" },
                { id: 7004, name: "Çanta" },
                { id: 7005, name: "Aksesuarlar" }
              ],
            },
            {
              id: 402,
              name: "Erkek",
              subCategories: [
                { id: 8001, name: "Takım Elbise" },
                { id: 8002, name: "Gömlek" },
                { id: 8003, name: "Pantolon" },
                { id: 8004, name: "Saat" },
                { id: 8005, name: "Kravat" }
              ],
            },
            {
              id: 403,
              name: "Çocuk",
              subCategories: [
                { id: 9001, name: "Tişört" },
                { id: 9002, name: "Pantolon" },
                { id: 9003, name: "Mont" },
                { id: 9004, name: "Ayakkabı" },
                { id: 9005, name: "Şapka" }
              ],
            },
          ],
        },
        {
          id: 5,
          name: "Spor & Outdoor",
          subCategories: [
            {
              id: 501,
              name: "Kamp & Doğa",
              subCategories: [
                { id: 10001, name: "Çadır" },
                { id: 10002, name: "Uyku Tulumu" },
                { id: 10003, name: "Kamp Ocakları" },
                { id: 10004, name: "Sırt Çantası" },
                { id: 10005, name: "Kamp Sandalyesi" }
              ],
            },
            {
              id: 502,
              name: "Fitness",
              subCategories: [
                { id: 11001, name: "Ağırlık Setleri" },
                { id: 11002, name: "Koşu Bandı" },
                { id: 11003, name: "Yoga Matı" },
                { id: 11004, name: "Dambıl" },
                { id: 11005, name: "Atlama İpi" }
              ],
            },
          ],
        },
        {
          id: 6,
          name: "Otomotiv",
          subCategories: [
            {
              id: 601,
              name: "Araç Aksesuarları",
              subCategories: [
                { id: 12001, name: "Oto Kokusu" },
                { id: 12002, name: "Telefon Tutucu" },
                { id: 12003, name: "Araç Şarjı" },
                { id: 12004, name: "Koltuk Kılıfı" },
                { id: 12005, name: "Güneşlik" }
              ],
            },
          ],
        }
      ],
      selectedCategory: null,
      selectedSubCategory: null,
      selectedSubSubCategory: null,
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
      this.selectedSubCategory = null;
      this.selectedSubSubCategory = null;
    },
    selectSubCategory(subCategory) {
      this.selectedSubCategory = subCategory;
      this.selectedSubSubCategory = null;
    },
    selectSubSubCategory(subSubCategory) {
      this.selectedSubSubCategory = subSubCategory;
      this.$router.push("/products"); 
    },
  },
};
</script>

<style scoped>

html, body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;

}
.footer{
padding: 80px 0 0 0;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
    width: 100%;
}

.categories-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-sizing: border-box;
}

.category-panel {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  margin: 5px;
  text-align: center;
}

.category-panel h3 {
  margin-bottom: 10px;
}

.category-panel ul {
  list-style: none;
  padding: 0;
}

.category-panel li {
  margin: 5px 0;
}

.category-panel button {
  width: 70%;
  padding: 10px;
  border: none;
  background-color: #45a049;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.category-panel button:hover {
  background-color: #45a049;
}
@media (max-width: 768px) {
  .categories-container {
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  
  }

  .category-panel {
    width: 100%; 
    margin-bottom: 15px;
   
  }

  .category-panel button {
    font-size: 1.2rem; 
    padding: 15px;
  }
}
</style>
