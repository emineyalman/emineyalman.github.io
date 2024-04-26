<template>
  <h2 id="portfolio">Portfolio</h2>
  <div class="portfolio-container">
    <v-card class="mx-auto" v-for="portfolio in portfolioList" :key="portfolio" 
    data-aos="flip-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="1000">
      <v-img  :src="portfolio.img" cover class="animate__animated animate__bounce animate-duration: 2s"></v-img>

      <v-card-title class="animate__animated  animate__lightSpeedInRight">
        {{ portfolio.title }}
      </v-card-title>

      <v-card-subtitle> Project Description </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="animate__animated animate__wobble"
          color="orange-lighten-2"
          text="MORE"
          @click="show = (show === portfolio ? null : portfolio)" >
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div  v-show="show === portfolio">
          <v-divider></v-divider>

          <v-card-text  class="animate__animated  animate__fadeInUp" >
            {{ portfolio.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    portfolioList: [],
  }),
  mounted() {
    this.$appAxios.get("/portfolios").then((portfolio_response) => {
      console.log("portfolio_response :>> ", portfolio_response);
      this.portfolioList = portfolio_response?.data || [];
    });
  },
};
</script>


<style scoped>
:root {
  --animate-duration: 2s;
  --animate-delay: 0.9s;
}
.portfolio-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 90%;
  height: 700px;
}
.v-card {
  width: 30%;
  border-radius: 10px;
  background: black;
  color: wheat;
  border: 1px rgb(61, 59, 59) solid;
}
.v-btn {
  background: rgb(171, 55, 132);
}
.v-img{
  height:300px;
}
</style>