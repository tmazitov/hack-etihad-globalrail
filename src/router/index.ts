import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("../router/HomePage.vue"),
  },
  {
    name: "map",
    path: "/map",
    component: () => import("../router/MapPage.vue"),
  },
  {
    name: "profile",
    path: "/profile",
    component: () => import("../router/ProfilePage.vue"),
  },
  { 
    name: "trip",
    path: "/trip",
    component: () => import("../router/TripPage.vue"),
    query: {
      tripId: Number
    }
  },
  {
    name: "plans",
    path: "/plans",
    component: () => import("../router/PlansPage.vue"),
  },
  {
    name: "welcome",
    path: "/welcome",
    component: () => import("../router/WelcomePage.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
