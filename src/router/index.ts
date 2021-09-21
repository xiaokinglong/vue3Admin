import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Layout from "../layout/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../pages/home/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/index.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
