<template>
  <div>
    <v-progress-linear
      v-model="power"
      color="amber"
      height="25"
    ></v-progress-linear>

    <br />

    <h1>HomePage</h1>

    <v-progress-linear v-model="skill" color="blue-grey" height="25">
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />

    <v-progress-linear
      class="animate__bounceInLeft"
      v-model="knowledge"
      height="25"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </v-progress-linear>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    skill: 20,
    knowledge: 33,
    power: 78,
  }),
};
</script>

<style scoped>
/* .bg-amber {
  animation: progress 1.4s ease-in-out forwards;
  opacity: 0;
} */
</style>