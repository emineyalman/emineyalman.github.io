
<template>
    <h2>Skills</h2>
    <div class="container">
      <div class="skills-area">
        <div class="skill" v-for="(skill, index) in skills" :key="index">
          <div class="skill-title">{{ skill.title }}</div>
          <div class="skill-bar"></div>
          <div
            :class="[skill.title.toLowerCase(), 'skill-fill']"
            :style="{ width: skill.percent }"
          >
            <span class="skill-percent">{{ skill.percent }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import ScrollReveal from 'scrollreveal';

  export default {

    
    data: () => ({
      skill: 20,
      knowledge: 33,
      power: 78,
      skills: [
        {
          title: "HTML",
          percent: "90%",
        },
        {
          title: "CSS",
          percent: "80%",
        },
        {
          title: "SCSS",
          percent: "80%",
        },
        {
          title: "JS",
          percent: "70%",
        },
        {
          title: "VUE JS",
          percent: "70%",
        },
        {
          title: "NUXT JS",
          percent: "70%",
        },
        {
          title: "VUETIFY",
          percent: "40%",
        },
        {
          title: "BOOTSTRAP",
          percent: "30%",
        },
      ],
    }),
    mounted(){
      const sr = ScrollReveal();
      sr.reveal('.skill', {
        duration: 2000,
        origin: 'bottom',
        distance: '50px',
        delay: 200,
        easing: 'ease-in',
      });
    }
  };
  </script>
  
  <style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
  }
  h2 {
    text-align: center;
    color: white;
    font-size: 35px;
  }
  .container {
    position: relative;
    width: 100%;
  }
  
  .skills-area {
    display: flex;
    flex-direction: column;
    padding: 0 20%;
  }
  .skill {
    position: relative;
    margin-bottom: 10px;
  
    .skill-title {
      font-size: 20px;
      margin-bottom: 10px;
      color: wheat;
    }
  
    .skill-bar {
      width: 100%;
      background: rgba(196, 190, 190, 0.6) !important;
      height: 40px;
      z-index: -1;
      border-radius: 100px;
      position: absolute;
    }
  
    .skill-fill {
  background-image: radial-gradient(
    circle,
    rgb(255, 204, 0),
    rgb(255, 0, 183)
  );
  height: 40px;
  border-radius: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
  overflow: hidden;
}

.skill-fill .skill-percent {
  font-size: 20px;
  color: white;
}


  @for $i from 1 through 8 {
    $percent: 0;
    $name: "";
  
    @if $i == 1 {
      $percent: 90%;
      $name: "html";
    } @else if $i == 2 {
      $percent: 80%;
      $name: "css";
    } @else if $i == 3 {
      $percent: 80%;
      $name: "scss";
    } @else if $i == 4 {
      $percent: 70%;
      $name: "js";
    } @else if $i == 5 {
      $percent: 70%;
      $name: "vuejs";
    } @else if $i == 6 {
      $percent: 70%;
      $name: "nuxtjs";
    } @else if $i == 7 {
      $percent: 40%;
      $name: "vuetify";
    } @else if $i == 8 {
      $percent: 30%;
      $name: "bootstrap";
    }
  
    // Her animasyon için @keyframes tanımlıyoruz
    @keyframes #{$name} {
      from {
        width: 0;
      }
      to {
        width: $percent;
      }
    }
  
    // Her animasyon için ilgili sınıfa animasyonu ekliyoruz
    .#{$name} {
      animation: #{$name} 2s;
      width: $percent;
    }
  
    @media only screen and (max-width: 750px) {
      .skills-area {
        padding: 0 5%;
      }
    }
  }
}
  </style>