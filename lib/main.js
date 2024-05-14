import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import appAxios from "@/utils/appAxios";
loadFonts();
const app = createApp(App);
app.config.globalProperties.$appAxios = appAxios;
app.mixin({
  mounted() {
    AOS.init();
  }
});
app.use(vuetify);
app.use(router);
app.mount('#app');