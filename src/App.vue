<template>
  <div class="app-container">
    <div class="all-container">
      <HomePage />
      <About />
      <Experience />
      <!-- <Skills /> -->
      <DenemeMe />
      <DenemeMeOrnek />
      <ContactPage/>
      <NightLight/>
    <!-- <ScrollDeneme/> -->
      <!-- <ScrollDenemee/> -->
      <CardPage/>
    </div>
  </div>
</template>




<script>
import HomePage from "./components/HomePage.vue";
import Experience from "./views/ExperiencePage.vue";
// import Skills from "./views/SkillsPage.vue";
import DenemeMe from "./views/DenemeMe.vue";
// import DenemeMeOrnek from "./views/DenemeMe.vue";
import About from "./views/AboutPage.vue";
import ContactPage from './views/ContactPage.vue';
import NightLight from './views/NightLight.vue';
//  import ScrollDeneme from './views/ScrollDeneme.vue';
// import ScrollDenemee from "./views/ScrollDenemee.vue";

import CardPage from './views/CardPage.vue';


//Css
import "../src/assets/responsive.css"

export default {
  data() {
    return {};
  },

  components: {
    HomePage,
    Experience,
    // Skills,
    DenemeMe,
    About,
    // DenemeMeOrnek,
    ContactPage,
    NightLight,
    //  ScrollDeneme,
    // ScrollDenemee
    CardPage
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
  //background: red;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 4000px;
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
.all-container{
  width: 90%;
}
// .top-bar {
//   display: flex;
//   width: 100%;
// }

// #navigation-icon {
//   padding: 10px 10px 20px;
//   margin-right: 10px;
//   cursor: pointer;

//   i {
//     font-size: 2rem;
//   }
// }

// .content {
//   position: absolute;
//   top: 10px;
//   width: calc(100% - 10px);
//   // height: calc(100vh - 60px);
//   height: 1000px;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 30px;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
//   transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
// }

// .open {
//   transform: translateX(300px);
// }
</style>



