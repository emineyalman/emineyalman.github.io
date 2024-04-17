<template>
  <div>
    <h1>About</h1>
    <div class="about-container">
     <div class="information">
      <h2>Frontend Developer</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nostrum ad odio earum officiis? </p>
     </div>
     <div class="profil">
      <img src="tasarimm.png" class="profil-img" alt="Resim" data-aos="zoom-in-up" data-aos-duration="1000">

    <!-- <img src="tasarimm.png" class="profil-img"> -->
      <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quia rerum velit magni  </p> -->
     </div>
     
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  mounted() {
    AOS.init();
  }
};
</script>

<style scoped>
.about-container {
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  background: rgb(59, 57, 57);
  margin: 0 auto;
}
.information{
  /* background: yellow; */
  width: 50%;

}
.profil{
  /* background: purple; */
  width: 50%;
}
.profil-img{
  width: 400px;
  height: 400px;
  object-fit: contain;
}
h2,p{
  color: black;
}
</style>