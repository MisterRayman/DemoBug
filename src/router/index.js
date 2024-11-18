import { createRouter, createWebHistory} from 'vue-router'

import GlobalMessage from "../components/GlobalMessage";
import Impressum from "../components/Impressum";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/globalmessage", component: GlobalMessage },
    { path: "/impressum", component: Impressum },
    { path: "/:pathMatch(.*)*", redirect: "/impressum" }
  ]
})


export default router;
