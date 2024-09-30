import { createRouter, createWebHistory} from "vue-router";
import Login from "../components/Authentication/Login.vue";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
      { path: '/', component: () => import('../components/Home.vue'), meta: { requiresAuth: true} },
      { path: '/temp', component: () => import('../components/Template/Home.vue'), meta: { requiresAuth: true} },
      { path: '/tourismsector/asset', component: () => import('../components/Template/TourismSector/TourismSectorHome.vue'), meta: { requiresAuth: true} },


      { path: '/sampel-withid/:id',
          component: () => import('../components/Template/Home.vue'),
          meta: { requiresAuth: true} },

     
      { path: '/login', component: Login , meta: { requiresAuth: false }},
  ],
});
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = localStorage.getItem("user");
    console.log("login authenticated",isAuthenticated)
    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else if (!requiresAuth && isAuthenticated && to.path === '/login') {
        next('/');
    } else {
        next();
    }
});
export default router;
