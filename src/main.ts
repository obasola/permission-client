import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Menubar from "primevue/menubar";
import Button from 'primevue/button';
import Toast from 'primevue/toast';

const app = createApp(App);

app.use(store)
   .use(router)
   .use(PrimeVue)
   .mount("#app");
   
   app.component('Dialog', Dialog)
      .component('Menubar', Menubar) 
      .component('Button', Button)
      .component('Toast', Toast);

