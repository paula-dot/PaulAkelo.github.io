<template>
  <section class="flex flex-col md:flex-row items-center justify-between py-20 mb-16 bg-white rounded-xl shadow-lg px-6 md:px-16">
    <div class="flex-1 text-center md:text-left">
      <h2 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">Hi, I'm <span class="text-orange-500">PAUL</span></h2>
      <h3 class="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Software Developer</h3>
      <p class="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-8">
        I build modern, responsive web applications that deliver exceptional user experiences.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
        <a href="#" class="bg-white text-gray-900 font-semibold px-6 py-3 rounded shadow hover:bg-orange-50 transition">Terminal</a>
        <a href="#" class="bg-orange-500 text-white font-semibold px-6 py-3 rounded shadow hover:bg-orange-600 transition">Resume</a>
      </div>
      <div class="flex space-x-6 justify-center md:justify-start mt-4">
        <a href="#" aria-label="GitHub" class="text-gray-500 hover:text-gray-900 text-2xl"><i class="fab fa-github"></i></a>
        <a href="#" aria-label="X" class="text-gray-500 hover:text-gray-900 text-2xl"><i class="fab fa-x-twitter"></i></a>
        <a href="#" aria-label="LinkedIn" class="text-gray-500 hover:text-gray-900 text-2xl"><i class="fab fa-linkedin"></i></a>
        <a href="#" aria-label="Stack Overflow" class="text-gray-500 hover:text-gray-900 text-2xl"><i class="fab fa-stack-overflow"></i></a>
      </div>
    </div>
    <div class="flex-1 flex justify-center mt-12 md:mt-0">
      <!-- Placeholder for 3D cube or illustration -->
      <img src="/vite.svg" alt="3D Cube" class="w-64 h-64 object-contain drop-shadow-xl" />
    </div>
  </section>
</template>

<script setup>
</script>
