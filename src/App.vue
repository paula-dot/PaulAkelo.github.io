<template>
  <div class="min-h-screen flex flex-col bg-gray-950 text-gray-100">
    <Navbar />
    <main class="flex-grow">
      <Hero />
      <About />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
</style>

