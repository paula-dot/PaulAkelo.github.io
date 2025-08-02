<template>
  <h2 class="text-lg text-gray-300 mt-2">{{ displayedText }}<span class="animate-pulse">|</span></h2>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const phrases = [
  "Aspiring Software Engineer",
  "AI Enthusiast",
  "Open Source Lover"
]

const displayedText = ref("")
let phraseIndex = 0
let charIndex = 0
let deleting = false

onMounted(() => {
  setInterval(() => {
    const phrase = phrases[phraseIndex]
    if (!deleting && charIndex < phrase.length) {
      displayedText.value += phrase.charAt(charIndex++)
    } else if (deleting && charIndex > 0) {
      displayedText.value = phrase.substring(0, --charIndex)
    } else if (!deleting && charIndex === phrase.length) {
      deleting = true
    } else if (deleting && charIndex === 0) {
      deleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
    }
  }, 100)
})
</script>
