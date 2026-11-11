<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
const COLORS = ['139,92,246', '59,130,246', '34,211,238']
let ctx = null
let raf = 0
let W = 0
let H = 0
let pts = []
const mouse = { x: -9999, y: -9999 }
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function resize() {
  const c = canvas.value
  const r = c.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  W = r.width
  H = r.height
  c.width = W * dpr
  c.height = H * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  const n = Math.min(80, Math.floor((W * H) / 14000))
  pts = Array.from({ length: n }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    c: COLORS[Math.floor(Math.random() * COLORS.length)]
  }))
}

function frame() {
  ctx.clearRect(0, 0, W, H)
  for (const p of pts) {
    p.x += p.vx
    p.y += p.vy
    if (p.x < 0 || p.x > W) p.vx *= -1
    if (p.y < 0 || p.y > H) p.vy *= -1
    const dx = p.x - mouse.x
    const dy = p.y - mouse.y
    const d = Math.hypot(dx, dy)
    if (d < 120 && d > 0) {
      p.x += (dx / d) * 1.2
      p.y += (dy / d) * 1.2
    }
  }
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i]
      const b = pts[j]
      const d = Math.hypot(a.x - b.x, a.y - b.y)
      if (d < 140) {
        ctx.strokeStyle = `rgba(${a.c},${(1 - d / 140) * 0.28})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
    }
  }
  for (const p of pts) {
    ctx.fillStyle = `rgba(${p.c},0.9)`
    ctx.beginPath()
    ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
    ctx.fill()
  }
  if (!reduce) raf = requestAnimationFrame(frame)
}

function onMove(e) {
  const r = canvas.value.getBoundingClientRect()
  mouse.x = e.clientX - r.left
  mouse.y = e.clientY - r.top
}

function onResize() {
  resize()
  frame()
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resize()
  frame()
  window.addEventListener('pointermove', onMove)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <canvas ref="canvas" class="particles" aria-hidden="true"></canvas>
</template>
