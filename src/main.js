import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/myStyle.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

// app.use(VueAxios, axios);

// app.mount('#app');


createApp(App).use(router).mount('#app')
