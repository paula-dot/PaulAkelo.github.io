<!--
<template>
  <section id="mapshowcase" class="relative min-h-screen flex flex-col items-center justify-center bg-black">
    <!-- Title -->
    <div
        class="absolute top-10 text-center z-10"
        v-motion
        :initial="{ opacity: 0, y: -30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
    >
      <h2 class="text-4xl font-bold mb-2 text-white">Homa Bay 3D Map</h2>
      <p class="text-gray-400">Exploring the terrain and spatial beauty of Kenya’s lakefront county</p>
    </div>

    <!-- Map -->
    <div ref="mapContainer" class="w-full h-screen"></div>

    <!-- Terrain toggle -->
    <div class="absolute bottom-6 right-6 z-20 bg-gray-900/80 text-sm text-gray-200 px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
      <label class="flex items-center gap-1">
        <input type="checkbox" v-model="terrainEnabled" @change="toggleTerrain" />
        Terrain Mode
      </label>
    </div>
  </section>

  <section
      class="relative h-screen flex flex-col justify-center items-center overflow-hidden"
      data-aos="fade-in"
  >
    <!-- Map -->
    <div ref="mapContainer" class="absolute inset-0 z-0"></div>

    <!-- Overlay content -->
    <div class="relative z-10 text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Jude</h1>
      <p class="text-lg md:text-xl text-gray-300 mb-6">
        Software Developer & GIS Enthusiast
      </p>
      <a
          href="#projects"
          class="px-6 py-3 bg-primary text-black rounded-xl font-semibold hover:bg-opacity-80 transition"
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

<style scoped>
.maplibregl-map {
  width: 100%;
  height: 100%;
}
</style>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useMotion } from '@vueuse/motion'
import maplibregl from 'maplibre-gl'

// Reference to the map container
const mapContainer = ref(null)
const map = ref(null)
const terrainEnabled = ref(false)

// Initialize map
onMounted(() => {
  map.value = new maplibregl.Map({
    container: mapContainer.value,
    style: 'https://demotiles.maplibre.org/style.json', // open-source MapLibre style
    center: [34.5, -0.5], // Homa Bay County approx
    zoom: 8.5,
    pitch: 45,
    bearing: 20,
    antialias: true,
  })

  map.value.addControl(new maplibregl.NavigationControl(), 'bottom-right')

  map.value.on('load', () => {
    // Add DEM (Digital Elevation Model) for 3D terrain
    map.value.addSource('terrainSource', {
      type: 'raster-dem',
      url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
      tileSize: 256,
      maxzoom: 14,
    })

    // Add sky layer for realism
    map.value.addLayer({
      id: 'sky',
      type: 'sky',
      paint: {
        'sky-type': 'atmosphere',
        'sky-atmosphere-sun': [0.0, 0.0],
        'sky-atmosphere-sun-intensity': 10,
      },
    })

    // Initial fly animation
    map.value.flyTo({
      center: [34.6, -0.45],
      zoom: 9.5,
      pitch: 60,
      bearing: 30,
      speed: 0.3,
    })
  })
})

// Toggle terrain mode
const toggleTerrain = () => {
  if (!map.value) return
  if (terrainEnabled.value) {
    map.value.setTerrain({ source: 'terrainSource', exaggeration: 1.4 })
  } else {
    map.value.setTerrain(null)
  }
}
</script>

<style scoped>
.maplibregl-map {
  width: 100%;
  height: 100%;
}
</style>
-->
