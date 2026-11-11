<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  value: { type: String, required: true }
})

const el = ref(null)
const shown = ref(props.value)
let io = null
let frameId = 0

const match = /^(\d+)(\D*)$/.exec(props.value)

function animate() {
  if (!match) return
  const target = Number(match[1])
  const suffix = match[2]
  const duration = 1200
  const start = performance.now()
  const step = now => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    shown.value = Math.round(target * eased) + suffix
    if (t < 1) frameId = requestAnimationFrame(step)
  }
  shown.value = '0' + suffix
  frameId = requestAnimationFrame(step)
}

onMounted(() => {
  if (!match) return
  io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      animate()
      io.disconnect()
    }
  }, { threshold: 0.5 })
  io.observe(el.value)
})

onBeforeUnmount(() => {
  if (io) io.disconnect()
  cancelAnimationFrame(frameId)
})
</script>

<template>
  <span ref="el" class="count-value">{{ shown }}</span>
</template>
