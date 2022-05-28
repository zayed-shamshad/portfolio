import { createWebHistory, createRouter } from "vue-router";
import about from './about.vue';
import projects from './projects.vue';
import home from './home.vue';
import movie from './movie.vue';

const routes = [
   
    {
        path: "/",
        name: "home",
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
  history: createWebHistory(),
  routes,
});
export default router;