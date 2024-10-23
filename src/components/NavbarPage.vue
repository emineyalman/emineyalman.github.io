<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="logo-container">
      <div class="logo">Emine Yalman</div>
    </div>

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

    <div
      class="collapse navbar-collapse"
      :class="{ show: menuOpen }"
      id="navbarTogglerDemo02"
    >
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id="outer">
        <li
          class="nav-item active nav-link nav-color"
          v-for="navigation in navigationList"
          :key="navigation.id"
        >
          <a :href="'#' + navigation.title.toLowerCase()">{{
            navigation.title
          }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import "animate.css";

export default {
  data() {
    return {
      navigationList: [
        { id: 1, title: "Home" },
        { id: 2, title: "About" },
        { id: 4, title: "Education-Experiences" },
        { id: 3, title: "Skills" },
        { id: 5, title: "Portfolio" },
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


<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bg-light {
  --bs-bg-opacity: 0.3 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
}

a {
  text-decoration: none !important;
  color: white !important;
}

.navbar-brand {
  color: white;
  letter-spacing: 1px;
  margin-left: 30px;
}

.navbar-nav .nav-link.active,
.navbar-nav .nav-link.show {
  color: white !important;
}

.navbar {
  background: #212225 !important;
}

.nav-item {
  cursor: pointer;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  letter-spacing: 1px;

  &:hover {
    transition: ease-out 0.6s;
    background-image: radial-gradient(circle, #ffcc00, #ff00b7);
    box-shadow: inset 0 0 0 50px #d80286;
    animation: shake 0.5s; 
  }
}

#outer {
  margin: 50px 0 0 auto;
  text-align: center;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;

  .logo {
    font-family: "Roboto", "Open Sans", "Montserrat", "Lato";
    font-size: 18px; 
    color: #e5d9d9; 

    &:hover {
      cursor: pointer; 
      background-image: linear-gradient(to right, #facc15, #db2777);
      -webkit-background-clip: text;
      color: transparent;
      transition: color 0.6s ease-out;
    }
  }
}
[type=button]:not(:disabled), button:not(:disabled) {
  background-image: radial-gradient(circle, #ffcc00, #db2777)
}

.navbar-collapse{
  z-index: 1000;
}
</style>
