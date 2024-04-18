<template>
  <h3 id="education-experiences" class="experience-title">
    Education and Experience
  </h3>
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
          data-aos="zoom-out-up"
        ></div>
      </template>
      <div>
        <h2
          :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`"
          data-aos="fade-up"
        >
          {{ year.title }}
        </h2>
        <div style="color: white" data-aos="zoom-in-up">
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

<style scoped lang="scss">
.v-timeline {
  background: #222226;
  width: 80%;
  margin: 0 auto;
  height: 1300px;
  border-radius: 1rem;
  border: 1px #827e580d solid;

  .v-timeline--vertical.v-timeline--align-start
    .v-timeline-divider
    .v-timeline-divider__after {
    background: #f7f4f4 !important;
  }
}

.experience-title {
  margin: 6rem;
}
</style>
