<template>
  <div class="app-container" :class="{ light: isDark }">
    <div class="all-container">
      <NavbarPage />
      <button @click.stop="toggleDark()">
        <i v-if="isDark" class="fas fa-moon"></i> 
        <i v-else class="fas fa-sun"></i>
      </button>
      <HomePage />
      <AboutPage/>
      <Experience />
      <SkillsPage />
      <PortfolioPage/>
      <ContactPage />
      <!-- <NightLight /> -->
      <FooterPage/>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body", 
  attribute: "theme", 
  valueDark: "custom-dark", 
  valueLight: "custom-light", 
});

const toggleDark = useToggle(isDark);
</script>

<script>
import NavbarPage from "./components/NavbarPage.vue";
import Experience from "./views/ExperiencePage.vue";
import SkillsPage from "./views/SkillsPage.vue";
import HomePage from "./views/HomePage.vue";
import ContactPage from "./views/ContactPage.vue";
// import NightLight from "./views/NightLight.vue";
import AboutPage from "./views/AboutPage.vue";
import PortfolioPage from "./views/PortfolioPage.vue"
import FooterPage from "./views/FooterPage.vue"


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
    // NightLight,
    AboutPage,
    PortfolioPage,
    FooterPage,
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
body.dark{
  background: white;
}

.app-container {
  width: 80%;
  padding: 10px;
  color: #333;
  background: #18181b;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 5500px;
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
  width: 100%;
}

.dark {
  background: #16171d; // it's better to use a dark grey color instead of pure black
  color: #fff;
}
.light{
  background: white;
  color: black;
}
[theme="custom-dark"] {
  background: rgb(21, 12, 12);
  color: #fff;
}
[theme="custom-light"] {
  background: white;
  color: #1a0b0b;
}

.button .i{
 font-size: 30px;
}
</style>