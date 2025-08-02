/*<!-- <template>
  <div class="h-screen bg-gray-950 text-gray-100 flex flex-col">
  <Hero />
   <About />
   <Projects />
   <Contact />
     <MapShowcase />
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/">Projects</RouterLink>
    </div>
</template> -->

<!-- <script setup>
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
/* import MapShowcase from './components/MapShowcase.vue' */
import Contact from './components/Contact.vue'
</script> -->
*/

<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
    <!-- 🌊 Animated Gradient Header -->
    <header class="relative h-[220px] overflow-hidden">
      <div
          class="absolute inset-0 animate-gradient-wave bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70"
      ></div>
      <div
          class="absolute inset-0 bg-[url('/wave.svg')] bg-cover bg-bottom mix-blend-overlay opacity-80"
      ></div>

      <!-- Hero Text -->
      <div
          class="relative z-10 flex flex-col items-center justify-center h-full text-center"
      >
        <h1 class="text-4xl font-extrabold sm:text-5xl">Hi, I'm Paula!</h1>
        <h2 class="text-lg text-gray-300 mt-2">
          {{ displayedText }}<span class="animate-pulse">|</span>
        </h2>
      </div>
    </header>

    <!-- ✨ Body Section -->
    <main class="flex-grow flex flex-col items-center justify-center text-center p-8">
      <p class="text-gray-400 max-w-2xl">
        A budding software developer and GIS enthusiast crafting meaningful
        applications that connect data, maps, and human experiences.
      </p>
    </main>

    <!-- 🌍 Footer -->
    <footer class="text-gray-500 text-sm text-center py-4 border-t border-gray-800">
      © 2025 Spatial Dev Hub — Built with Vue, Tailwind & Love 💜
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const phrases = [
  "Aspiring Software Engineer",
  "AI Enthusiast",
  "Open Source Lover",
  "GIS Explorer"
];

const displayedText = ref("");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

onMounted(() => {
  setInterval(() => {
    const phrase = phrases[phraseIndex];
    if (!deleting && charIndex < phrase.length) {
      displayedText.value += phrase.charAt(charIndex++);
    } else if (deleting && charIndex > 0) {
      displayedText.value = phrase.substring(0, --charIndex);
    } else if (!deleting && charIndex === phrase.length) {
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }, 100);
});
</script>

<style scoped>
@keyframes gradient-move {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
.animate-gradient-wave {
  background-size: 300% 300%;
  animation: gradient-move 6s ease infinite;
}
</style>

