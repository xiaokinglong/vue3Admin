import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import { router } from './router/index';
import 'animate.css';
import { createPinia, PiniaPlugin } from 'pinia'

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(PiniaPlugin);
app.use(MotionPlugin); // vueuse/motion

app.mount('#app')
