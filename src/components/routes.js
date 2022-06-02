import {  createRouter, createWebHashHistory } from "vue-router";
import about from './about.vue';
import projects from './projects.vue';
import home from './HOME.vue';
import movie from './movie.vue';

const routes = [
    {
        path: "/",
        name: "HOME",
        component: home,
    },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/projects",
    name: "projects",
    component: projects,
    children: [{
        path: "movie",
        name: "movie",
        component: movie,
      },]
  },
  
];

const router = createRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  history: createWebHashHistory(),
  routes,
});
export default router;