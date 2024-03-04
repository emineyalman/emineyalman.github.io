import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store';
import router from './router'
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import appAxios from "@/utils/appAxios";



loadFonts()

const app = createApp(App);

app.config.globalProperties.$appAxios = appAxios;



app.use(vuetify);
app.use(store);
app.use(router);
app.mount('#app');
