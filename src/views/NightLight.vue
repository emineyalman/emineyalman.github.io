<template>
  <button @click.stop="toggleDarkMode()">
    <i v-if="isDark" class="fas fa-moon"></i> <!-- Moon icon for dark mode -->
    <i v-else class="fas fa-sun"></i> <!-- Sun icon for light mode -->
  </button>
</template>

<script setup>
import { useDark } from "@vueuse/core";

const { isDark, toggle: toggleDarkMode } = useDark({
  selector: "body", //element to add attribute to
  attribute: "theme", // attribute name
  valueDark: "custom-dark", // attribute value for dark mode
  valueLight: "custom-light", // attribute value for light mode
});
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
