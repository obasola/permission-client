import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SimpleForm from "../views/SimpleForm.vue";
import Page from "../views/Page.vue";
import Person from "@/views/Person.vue";
import PageElement from "@/views/PageElement.vue";
import Permission from "@/views/Permission.vue";
import PermissionGroup from "@/views/PermissionGroup.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/petform",
    name: "SimpleForm",
    component: SimpleForm,
  },
  {
    path: "/page",
    name: "Page",
    component: Page,
  },
  {
    path: "/persons",
    name: "Users",
    component: Person,
  },
  {
    path: "/pageElement",
    name: "Page Elements",
    component: PageElement,
  },
  {
    path: "/permission",
    name: "permissions",
    component: Permission,
  },
  {
    path: "/permissionGroup",
    name: "Permission Group",
    component: PermissionGroup,
  },
  {
    path: "/dashboard",
    name: "Permission Dashboard",
    component: Page,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
