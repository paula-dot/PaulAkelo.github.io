/*
<template>
  <section
      class="relative min-h-screen flex flex-col justify-center overflow-hidden"
      data-aos="fade-in"
  >
    <!-- Map -->
   <!-- <div ref="mapContainer" class="absolute inset-0 z-0"></div> -->

    <!-- Overlay content -->
    <div class="relative z-10 text-left px-8">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Jude</h1>
      <p class="text-lg md:text-xl text-gray-300 mb-6">
        Software Developer & GIS Enthusiast
      </p>
      <a
          class="px-6 py-3 bg-primary text-black rounded-xl font-semibold hover:bg-opacity-80 transition"
          href="#projects"
      >
        View My Work
      </a>
    </div>

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/50 z-5"></div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import maplibregl from 'maplibre-gl'
import 'aos/dist/aos.css'
import AOS from 'aos'

const mapContainer = ref(null)

onMounted(() => {
  AOS.init({ duration: 1000, once: true })

  const map = new maplibregl.Map({
    container: mapContainer.value,
    style: 'https://demotiles.maplibre.org/style.json',
    center: [34.5, -0.5], // Homa Bay County
    zoom: 8,
    pitch: 45,
    bearing: -30,
  })

  map.on('load', () => {
    // Simple camera animation
    map.flyTo({
      center: [34.6, -0.45],
      zoom: 9,
      pitch: 60,
      bearing: 20,
      speed: 0.3,
    })
  })
})
</script>

<!--
<style scoped>
.maplibregl-map {
  width: 100%;
  height: 100%;
}
</style>
-->
*/

