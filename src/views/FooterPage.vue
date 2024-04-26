<template>
  <v-container >
    <v-row >
      <v-col cols="6" class="text-center title">
        <p>"You can contact me for good projects."</p>
      </v-col>
      <v-col cols="6" class="text-center">
       
          <div  class="media-icons">
            <a href="https://github.com/emineyalman" target="_blank">
              <i class="fab fa-github"> </i>
            </a>
            <a
              href="https://www.linkedin.com/in/emine-y-14b22a152/"
              target="_blank"
            >
              <i class="fab fa-linkedin"> </i>
            </a>
            <a href="https://medium.com/@emine.yalman" target="_blank">
              <i class="fab fa-medium"> </i>
            </a>
          </div>
       
      </v-col>
      <v-col cols="12" class="text-center copyright">
 <p>Copyright © 2024 All Rights Reserved.</p>
      </v-col>
    </v-row>
  </v-container>
</template>



  <style lang="scss" scoped>
.v-container {
  background: rgb(171, 55, 132);
  height: 90px;
  margin-top: 5rem;
}

.title{
  color: white;
}
.copyright{
   // background: #151212;
    color: #ffeeee;
    margin-top: .5rem;
}
.v-col{
  padding: 0px;
}
.media-icons {
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  a {
    transition: 0.3s;
    color: yellow;
    font-size: 22px;
     width: 50px;

    &:hover {
      
      color: yellow;
      background: #ff459d;
      transition: color 0.6s;
    }
  }
}
</style>