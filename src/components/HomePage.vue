<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Emine Yalman</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="toggleMenu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <transition name="fade">
      <div
        class="collapse navbar-collapse"
        :class="{ show: menuOpen }"
        id="navbarTogglerDemo02"
      >
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li
            class="nav-item active nav-link"
            v-for="navigation in navigationList"
            :key="navigation.id"
          >
            {{ navigation.title }}
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navigationList: [
        { id: 1, title: "Home" },
        { id: 2, title: "About" },
        { id: 3, title: "Skills" },
        { id: 4, title: "Education / Experiences" },
        { id: 5, title: "Blog" },
        { id: 6, title: "Contact" },
      ],
      menuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
