import Vue from "vue";
import VueRouter from "vue-router";
import map from "../views/map.vue";
import home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/map",
    name: "weatherMap",
    component: map
  }
];

const router = new VueRouter({
  routes
});

export default router;
