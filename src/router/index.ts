import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";
import Portfolio from "../views/Portfolio.vue";
import PortfolioDetail from "../views/PortfolioDetail.vue";
// import Contact from "../views/Contact.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      isPage: true,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    component: About,
    meta: {
      isPage: true,
    },
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
    meta: {
      isPage: true,
    },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: {
      isPage: true,
    },
  },
  {
    path: "/portfolio-detail/:id",
    name: "PortFolioDetail",
    component: PortfolioDetail,
  },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: Contact,
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
