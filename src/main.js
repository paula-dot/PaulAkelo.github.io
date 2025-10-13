import { createApp } from 'vue'
import App from './App.vue'
import '../assets/css/main.css' // Tailwind CSS entry

import {MotionPlugin} from '@vueuse/motion'

const app = createApp(App)
app.use(MotionPlugin)
app.mount('#app')