<template>
  <header class="relative h-[200px] overflow-hidden">
    <div class="absolute inset-0 animate-gradient-wave bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70"></div>
    <div class="absolute inset-0 bg-[url('/wave.svg')] bg-cover bg-bottom mix-blend-overlay"></div>
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-white">
      <h1 class="text-4xl font-bold">Hi, I'm Paula!</h1>
      <TypingText />
    </div>
  </header>
</template>

<style scoped>
@keyframes gradient-move {
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
}
.animate-gradient-wave {
  background-size: 300% 300%;
  animation: gradient-move 6s ease infinite;
}
</style>
<script setup lang="ts">
import TypingText from "./TypingText.vue";
</script>