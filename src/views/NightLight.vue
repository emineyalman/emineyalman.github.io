<template>
    <div id="app" >
    <label class="switch">
      <input type="checkbox" v-model="isNightMode">
      <span class="slider"></span>
    </label>
    <p>{{ isNightMode ? 'Gece Modu' : 'Gündüz Modu' }}</p>
  </div>

</template>

<script>
export default {
    data() {
        return {
          isNightMode: false
        }},
  watch: {
    isNightMode: function(newVal) {
      if (newVal) {
        document.body.classList.add('night-mode');
      } else {
        document.body.classList.remove('night-mode');
      }
    }
  }
}
</script>

<style scoped>
/* Temel switch stilleri */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Gece Modu stilleri */
.night-mode {
  background-color: white;
  color: #1e1515;
}

</style>