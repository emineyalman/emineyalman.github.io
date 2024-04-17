<template>
  <section class="home flex-default" id="home">
    <div class="home-container">
      <div data-aos="fade-down" class="media-icons">
        <a href="#"> <i class="fab fa-facebook-f"> </i> </a>
        <a href="#"> <i class="fab fa-instagram"> </i> </a>
        <a href="#"> <i class="fab fa-twitter"> </i> </a>
      </div>
      <div class="info">
        <h2 data-aos="zoom-out-up">Hi, I am Emine</h2>
        <h3 data-aos="fade-left">Front-end Developer</h3>
        <p class="animate__animated animate__flipInX">
          I create stunning websites for your business, Highly experienced in
          web design and development.
        </p>
        <a data-aos="zoom-in" href="#contact" class="btn">
          Contact Me <i class="fas fa-arrow-circle-right"></i
        ></a>
      </div>
      <div data-aos="zoom-out-left" class="home-img">
        <img src="tasarimmmmm.png" class="img-profil" />
      </div>
    </div>
    <a
      href="#"
      class="scroll-down"
      @click.prevent="scrollToElement('education-experiences')"
      ><i class="fas fa-arrow-down"></i
    ></a>
  </section>
</template>

<script>
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init();
  },
  methods: {
    scrollToElement(id) {
      var element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
};
</script>


<style scoped lang="scss">
.home {
  position: relative;
  max-width: 1250px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 2rem;
  flex-direction: column;

  .home-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .media-icons {
      display: flex;
      flex-direction: column;
      width: 70px;
      height: 120px;
      align-items: center;
      justify-content: center;
      a {
        transition: 0.3s;
        color: #ff459d;
        padding: 8px 13px;
        font-size: 22px;
        width: 50px;

        &:hover {
          color: yellow;
          background: #ff459d;
          transition: color 0.6s;
        }
      }
    }

    .info {
      h2 {
        font-size: 4em;
        font-weight: 600;
        line-height: 70px;
        background-image: linear-gradient(
          to right,
          #facc15,
          #db2777
        ) !important;
        -webkit-background-clip: text !important;
        color: transparent !important;
      }
      h3 {
        font-size: 2em;
        color: rgb(137, 30, 48);
        font-feature-settings: "ss01" 1.3em;
      }
      p {
        color: rgb(224, 224, 218);
        font-size: 16px;
        max-width: 350px;
      }
      .btn {
        background: #ff459d;
        color: white;
        font-size: 20px;
        font-weight: 500;
        display: inline-block;
        margin-top: 25px;
        padding: 14px 30px;
        letter-spacing: 1px;
        border-radius: 10px;
        &:hover {
          background-image: radial-gradient(circle, #ffcc00, #ff00b7);
          transition: 0.3s;
        }
      }
    }
    .home-img .img {
      width: 10 0%;
      transform: translate(0, 0);
    }
  }
  .scroll-down {
    color: goldenrod;
    font-size: 1em;
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s;
    color: #ff459d;
    width: 40px;
    height: 40px;
    text-align: center;

    &:hover {
      color: yellow;
      background: #ff459d;
      transition: color 0.6s;
      border-radius: 50%;
    }
    i {
      color: yellow;
      font-size: 1.2em;
      animation: arrow-down ease 2s infinite;
      @keyframes arrow-down {
        0% {
          transform: translateY(0);
        }
        30% {
          transform: translateY(10px);
        }
      }
    }
  }
}

.flex-default {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-profil {
  width: 350px;
  height: 350px;
}
.aos-trigger {
  transition: transform 1s ease; /* Geçiş efekti süresini artırma */
}

.aos-trigger:hover {
  transform: scale(1.1); /* Hover durumunda öğenin boyutunu büyüt */
}
</style>