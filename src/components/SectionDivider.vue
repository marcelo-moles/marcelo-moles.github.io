<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const el = ref(null)
let io = null

onMounted(() => {
  io = new IntersectionObserver(([entry]) => {
    el.value.classList.toggle('in-view', entry.isIntersecting)
  }, { threshold: 0.9 })
  io.observe(el.value)
})

onBeforeUnmount(() => io && io.disconnect())
</script>

<template>
  <div ref="el" class="divider" aria-hidden="true">
    <span class="divider-sweep"></span>
  </div>
</template>
