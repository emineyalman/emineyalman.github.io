
  <template>
  <h3>Skills</h3>
  <v-skeleton-loader :elevation="13" type="list-item-avatar">
    <div class="skills-container">
      <v-progress-linear
        v-model="power"
        color="amber"
        height="25"
      ></v-progress-linear>

      <div class="skill-box" v-for="skill in skills" :key="skill.title">
        <span class="title">{{ skill.title }}</span>

        <div class="skill-bar">
          <span class="skill-per html">
            <span class="tooltip">{{ skill.percent }}</span>
          </span>
        </div>
      </div>

      <div class="skills-area">
        <div class="skill">
          <div class="skill-title">HTML</div>
          <div class="skill-bar"></div>
          <div class="html skill-fill">
            <span class="skill-percent">50%</span>
          </div>
        </div>
      </div>
    </div>
  </v-skeleton-loader>
</template>


<script>
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
        title: "JAVASKRİPT",
        percent: "50%",
      },
      {
        title: "VUEJS",
        percent: "70%",
      },
      {
        title: "NUXT JS",
        percent: "60%",
      },
    ],
  }),
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
} */

.skills-container {
  background: #fff;
  position: relative;
  max-width: 500px;
  width: 100%;
  margin: 0 15px;
  padding: 10px 20px;
  border-radius: 8px;
}

.container .skill-box {
  width: 100%;
  margin: 25px 0;
}

.skill-box .title {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.skill-box .skill-bar {
  height: 20px;
  width: 100%;
  border-radius: 6px;
  margin-top: 6px;
  background: rgba(0, 0, 0, 0.1);
}

.skill-bar .skill-per {
  position: relative;
  display: block;
  height: 100%;
  width: 90%;
  border-radius: 6px;
  background: #000;
  animation: progress 1.4s ease-in-out forwards;
  opacity: 0;
}
.skill-per.css {
  width: 70%;
  animation-delay: 0.15s;
}
.skill-per.js {
  width: 50%;
  animation-delay: 0.3s;
}
.skill-per.node-js {
  width: 30%;
  animation-delay: 0.45s;
}

@keyframes progress {
  0% {
    width: 0;
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.skill-per .tooltip {
  position: absolute;
  right: -14px;
  top: -28px;
  font-size: 9px;
  font-weight: 600;
  color: #171010;
  padding: 2px 6px;
  border-radius: 3px;
  background: #000;
  z-index: 1;
}
.tooltip::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  height: 10px;
  width: 10px;
  z-index: -1;
  background: #000;
  transform: translateX(-50%) rotate(45deg);
}
</style>