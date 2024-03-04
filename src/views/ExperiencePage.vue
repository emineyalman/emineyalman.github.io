<template>
  <h3>Education and Experience</h3>
  <v-timeline align="start">
    <v-timeline-item
      v-for="year in yearsList"
      :key="year.year"
      :dot-color="year.color"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${year.color}`"
          v-text="year.year"
        ></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
          {{ year.title }}
        </h2>
        <div style="color: white">
          <!-- Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
          imperdiet nec ut, sed euismod convenire principes at. Est et nobis
          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi
          sententiae. -->
          {{ year.description }}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  data: () => ({
    yearsList: [],
  }),
  mounted() {
    this.$appAxios.get("/years").then((years_response) => {
      console.log("years_response :>> ", years_response);
      this.yearsList = years_response?.data || [];
    });
  },
};
</script>

<style scoped>
.v-timeline {
  background: #222226;
  width: 70%;
  margin: 0 auto;
  height: 1300px;
  border-radius: 1rem;
  border: 1px #827e580d solid;
}
.v-timeline--vertical.v-timeline--align-start
  .v-timeline-divider
  .v-timeline-divider__after {
  background: #f7f4f4 !important;
}
</style>