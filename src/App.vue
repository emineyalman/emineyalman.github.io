<template>
  <div class="app-container">
    <div class="all-container">
      <NavbarPage />
      <HomePage />
      <AboutPage/>
      <Experience />
      <SkillsPage />
      <PortfolioPage/>
      <ContactPage />
      <NightLight />
     
    </div>
  </div>
</template>




<script>
import NavbarPage from "./components/NavbarPage.vue";
import Experience from "./views/ExperiencePage.vue";
import SkillsPage from "./views/SkillsPage.vue";
import HomePage from "./views/HomePage.vue";
import ContactPage from "./views/ContactPage.vue";
import NightLight from "./views/NightLight.vue";
import AboutPage from "./views/AboutPage.vue";
import PortfolioPage from "./views/PortfolioPage.vue"

//Css
import "../src/assets/responsive.css";

export default {
  data() {
    return {};
  },

  components: {
    NavbarPage,
    Experience,
    SkillsPage,
    HomePage,
    ContactPage,
    NightLight,
    AboutPage,
    PortfolioPage,
  },
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: #121213 !important ;
  border-radius: 1rem;
}

.app-container {
  width: 80%;
  padding: 10px;
  color: #333;
  background: #18181b;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 6000px;
  border-radius: 1rem;
  border: 1px #827e580d solid;
}

h1,
h2,
h3 {
  text-align: center;
  color: white !important;
  font-size: 35px !important;
}
.all-container {
  width: 90%;
}
</style>



