import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import Toast from "primevue/toast";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

const app = createApp(App);

app.use(store).use(router).use(PrimeVue).mount("#app");
app
  .component("Dialog", Dialog)
  .component("Menubar", Menubar)
  .component("Button", Button)
  .component("Checkbox", Checkbox)
  .component("TabView", TabView)
  .component("TabPanel", TabPanel)
  .component("Toast", Toast);
