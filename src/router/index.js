import { createRouter, createWebHistory } from "vue-router";
import TodoList from "@/components/TodoList.vue";

const routes = [
  {
    path: "/",
    component: TodoList,
  },
  {
    path: "/active",
    component: TodoList,
  },
  {
    path: "/completed",
    component: TodoList,
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
