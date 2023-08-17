import { createWebHashHistory, createRouter } from "vue-router";

// const routes = [
//   {
//     path: "/login",
//     name: "Login",
//     component: () => import("@/views/Login.vue"),
//   },
//   {
//     path: "/",
//     name: "Home",
//     component: () => import("@/views/Home.vue"),
//   },
// ];

const routes_pc = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/pc/index.vue"),
  },
];

const routes_h5 = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/h5/index.vue"),
  },
];

let routes = [];
routes = routes_pc;
if (navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBroswer|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
)) {
  routes = routes_h5;
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
