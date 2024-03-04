
<template>
  <div class="container">
    <h3 class="card-title">Timeline Style : Demo-1</h3>
    <div class="row">
      <div class="col-md-12">
        <div class="main-timeline">
          <div v-for="event in events" :key="event.year" class="timeline">
            <div class="timeline-icon"><i :class="['fa', event.icon]"></i></div>
            <div class="timeline-content">
              <h3 class="title">{{ event.year }}</h3>
              <p class="description">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          year: "2018",
          icon: "fa-globe",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.",
        },
        {
          year: "2015",
          icon: "fa-rocket",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.",
        },
        {
          year: "2012",
          icon: "fa-briefcase",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.",
        },
        {
          year: "2009",
          icon: "fa-mobile",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
body {
  margin-top: 20px;
  background-color: #f0f6ff;
}

/*timeline*/

a {
  text-decoration: none;
}

.main-timeline {
  position: relative;

  &:before {
    content: "";
    width: 5px;
    height: 100%;
    border-radius: 20px;
    margin: 0 auto;
    background: #242922;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .timeline {
    display: inline-block;
    margin-bottom: 50px;
    position: relative;

    &:before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 4px solid #fff;
      background: #d81159;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
    }

    .timeline-icon {
      display: inline-block;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 3px solid #d81159;
      padding: 13px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translateY(-50%);

      i {
        display: block;
        border-radius: 50%;
        background: #d81159;
        font-size: 64px;
        color: #fff;
        line-height: 100px;
        z-index: 1;
        position: relative;
      }

      &:after,
      &:before {
        content: "";
        width: 100px;
        height: 4px;
        background: #d81159;
        position: absolute;
        top: 50%;
        right: -100px;
        transform: translateY(-50%);
      }

      &:after {
        width: 70px;
        height: 50px;
        background: #f0f6ff;
        top: 89px;
        right: -30px;
      }
    }

    .timeline-content {
      width: 50%;
      padding: 0 50px;
      margin: 52px 0 0;
      float: right;
      position: relative;

      &:before {
        content: "";
        width: 70%;
        height: 100%;
        border: 3px solid #d81159;
        border-top: none;
        border-right: none;
        position: absolute;
        bottom: -13px;
        left: 35px;
      }

      &:after {
        content: "";
        width: 37px;
        height: 3px;
        background: #d81159;
        position: absolute;
        top: 13px;
        left: 0;
      }
    }

    &:nth-child(even) {
      .timeline-icon {
        left: auto;
        right: 30%;

        &:before {
          right: auto;
          left: -100px;
        }

        &:after {
          right: auto;
          left: -30px;
        }
      }

      .timeline-content {
        float: left;

        &:before {
          left: auto;
          right: 35px;
          transform: rotateY(180deg);
        }

        &:after {
          left: auto;
          right: 0;
        }
      }
    }

    &:nth-child(2n) {
      .timeline-icon i,
      .timeline-icon:before,
      &:before {
        background: #f68657;
      }

      .timeline-icon {
        border-color: #f68657;
      }

      .title {
        color: #f68657;
      }

      .timeline-content:before {
        border-left-color: #f68657;
        border-bottom-color: #f68657;
      }
    }

    &:nth-child(3n) {
      .timeline-icon i,
      .timeline-icon:before,
      &:before {
        background: #8fb800;
      }

      .timeline-icon {
        border-color: #8fb800;
      }

      .title {
        color: #8fb800;
      }

      .timeline-content:before {
        border-left-color: #8fb800;
        border-bottom-color: #8fb800;
      }
    }

    &:nth-child(4n) {
      .timeline-icon i,
      .timeline-icon:before,
      &:before {
        background: #2fcea5;
      }

      .timeline-icon {
        border-color: #2fcea5;
      }

      .title {
        color: #2fcea5;
      }

      .timeline-content:before {
        border-left-color: #2fcea5;
        border-bottom-color: #2fcea5;
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .main-timeline .timeline-icon:before {
    width: 50px;
    right: -50px;
  }

  .main-timeline .timeline:nth-child(even) .timeline-icon:before {
    right: auto;
    left: -50px;
  }

  .main-timeline .timeline-content {
    margin-top: 75px;
  }
}

@media only screen and (max-width: 990px) {
  .main-timeline .timeline {
    margin: 0 0 10px;
  }

  .main-timeline .timeline-icon {
    left: 25%;
  }

  .main-timeline .timeline:nth-child(even) .timeline-icon {
    right: 25%;
  }

  .main-timeline .timeline-content {
    margin-top: 115px;
  }
}

@media only screen and (max-width: 767px) {
  .main-timeline {
    padding-top: 50px;
  }

  .main-timeline:before {
    left: 80px;
    right: 0;
    margin: 0;
  }

  .main-timeline .timeline {
    margin-bottom: 70px;
  }

  .main-timeline .timeline:before {
    top: 0;
    left: 83px;
    right: 0;
    margin: 0;
  }

  .main-timeline .timeline-icon {
    width: 60px;
    height: 60px;
    line-height: 40px;
    padding: 5px;
    top: 0;
    left: 0;

    i {
      font-size: 30px;
      line-height: 45px;
    }
  }

  .main-timeline .timeline:nth-child(even) .timeline-icon {
    left: 0;
    right: auto;
  }

  .main-timeline .timeline-icon:before,
  .main-timeline .timeline:nth-child(even) .timeline-icon:before {
    width: 25px;
    left: auto;
    right: -25px;
  }

  .main-timeline .timeline-icon:after,
  .main-timeline .timeline:nth-child(even) .timeline-icon:after {
    width: 25px;
    height: 30px;
    top: 44px;
    left: auto;
    right: -5px;
  }

  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(even) .timeline-content {
    width: 100%;
    margin-top: -15px;
    padding-left: 130px;
    padding-right: 5px;
  }

  .main-timeline .timeline:nth-child(even) .timeline-content {
    float: right;
  }

  .main-timeline .timeline-content:before,
  .main-timeline .timeline:nth-child(even) .timeline-content:before {
    width: 50%;
    left: 120px;
  }

  .main-timeline .timeline:nth-child(even) .timeline-content:before {
    right: auto;
    transform: rotateY(0);
  }

  .main-timeline .timeline-content:after,
  .main-timeline .timeline:nth-child(even) .timeline-content:after {
    left: 85px;
  }
}

@media only screen and (max-width: 479px) {
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    padding-left: 110px;
  }

  .main-timeline .timeline-content:before,
  .main-timeline .timeline:nth-child(2n) .timeline-content:before {
    left: 99px;
  }

  .main-timeline .timeline-content:after,
  .main-timeline .timeline:nth-child(2n) .timeline-content:after {
    left: 65px;
  }
}
</style>