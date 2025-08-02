<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <div class="container mx-auto px-4">
      <Intro />
      <Projects />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import Projects from './components/Projects.vue'
// import Contact from './components/Contact.vue' // Uncomment if you add a Contact component
</script>