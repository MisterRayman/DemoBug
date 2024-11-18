import "whatwg-fetch";
import App from "./App.vue";
import { createApp } from 'vue';
import {createBootstrap} from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";


const app = createApp(App)
app.use(createBootstrap())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')



