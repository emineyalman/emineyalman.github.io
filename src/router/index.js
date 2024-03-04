import { createRouter, createWebHistory } from 'vue-router'
// import MyNavbar from "@/components/MyProfile.vue";


const routes = [
    // {
    //     path: '/',
    //     name: 'HomePage',
    //     component: MyNavbar,
    // },

];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;