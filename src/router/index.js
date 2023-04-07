import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/Main.vue";
import EggView from "@/views/EggView.vue";
import CaveView from "@/views/CaveView.vue";
import DragonView from "@/views/DragonView.vue";
const routes = [
  {
    path: "/",
    name: "Main",
    component: MainView
  },
  {
    path: "/egg",
    name: "Egg",
    component: EggView
  },
  {
    path: "/cave",
    name: "Cave",
    component: CaveView
  },
  {
    path: "/dragon",
    name: "Dragon",
    component: DragonView
  }
];

const router = createRouter({
  mode: "history",
  linkExactActiveClass: "active",
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
