<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'

const roles = computed(() => content[state.lang].ui.roles)
const text = ref('')
let timer = null
let idx = 0
let ch = 0
let deleting = false

// Devuelve cuánto esperar (ms) antes del siguiente paso
function step() {
  const current = roles.value[idx]
  if (!deleting) {
    ch++
    text.value = current.slice(0, ch)
    if (ch === current.length) {
      deleting = true
      return 1800
    }
    return 60
  }
  ch--
  text.value = current.slice(0, ch)
  if (ch === 0) {
    deleting = false
    idx = (idx + 1) % roles.value.length
    return 400
  }
  return 30
}

function loop() {
  timer = setTimeout(() => {
    loop()
  }, step())
}

function restart() {
  clearTimeout(timer)
  idx = 0
  ch = 0
  deleting = false
  text.value = ''
  timer = setTimeout(loop, 400)
}

onMounted(restart)
watch(() => state.lang, restart)
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <span class="typed">{{ text }}<span class="caret">|</span></span>
</template>
