import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ToDos from "../views/ToDos.vue";
import todo from "../components/todo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ToDos",
    name: "ToDos",
    component: ToDos
  },
  {
    path: "/ToDos/:id",
    name: "ToDo",
    component: todo
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
