import { createRouter, createWebHistory } from "vue-router";
import ContactForm from "../components/ContactForm.vue";

const routes = [{ path: "/", name: "Form", component: ContactForm }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
