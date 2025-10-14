<template>
  <nav class="flex items-center justify-between px-8 py-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
    <div class="flex items-center space-x-3">
       <!-- Avatar with animated gradient border -->
    <div class="p-[2px] rounded-lg bg-gradient-to-r from-orange-500 via-amber-400 to-red-600 animate-gradient">
      <img src="/images/paula_dot.png" alt="small circular avatar with a gradient border featuring a calm and confident expression, set against a neutral background">
    </div>

    <span class="text-lg font-semibold tracking-wide text-gray-100">Paula</span>
    </div>

    <div class="flex space-x-6">
      <a href="#about" class="hover:text-teal-400 transition-colors">About</a>
      <a href="#projects" class="hover:text-teal-400 transition-colors">Projects</a>
      <a href="#contact" class="hover:text-teal-400 transition-colors">Contact</a>
    </div>
  </nav>
</template>


<style scoped>
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShift 4s ease infinite;
}
</style>
