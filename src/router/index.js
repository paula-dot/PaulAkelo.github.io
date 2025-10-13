import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})