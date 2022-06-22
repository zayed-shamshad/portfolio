import {  createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./HOME.vue")
  },
];

const router = createRouter({
  scrollBehavior(to,from,savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
   
  },
  history: createWebHashHistory(),
  routes,
});
export default router;