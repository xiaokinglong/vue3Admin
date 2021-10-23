import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import { router } from './router/index';
import store from './store/index';
import 'animate.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(MotionPlugin); // vueuse/motion

app.mount('#app')
