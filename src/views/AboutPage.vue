<template>
  <div>
    <h1>About</h1>
    <div class="about-container">
      <v-skeleton-loader :elevation="13" type="list-item-avatar">
        <!-- <h1>hey</h1> -->
      </v-skeleton-loader>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-container {
  height: 600px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 80%;
  background: rgb(59, 57, 57);
}
/* .v-skeleton-loader__bone::after {
  background: linear-gradient(
    267deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0)
  ) !important;
} */
</style>