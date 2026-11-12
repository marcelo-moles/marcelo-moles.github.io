<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { state, toggleLang } from '../store.js'
import { content } from '../content.js'

const visible = ref(true)
const started = ref(false)
const lines = ref([])
const rainCanvas = ref(null)
const t = computed(() => content[state.lang].intro)
const hint = computed(() => (state.lang === 'es' ? 'toca el robot para iniciar' : 'tap the robot to start'))
const SPEED = 38
let timers = []
let rafId = 0
let lastFrame = 0
let ctx = null
let cols = 0
let drops = []
const FONT = 14
const glyphs = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF'

// Sonido de tecla: click generado con Web Audio
let audioCtx = null

function ensureAudio() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    if (audioCtx.state === 'suspended') audioCtx.resume()
  } catch (e) {
    audioCtx = null
  }
}

function playKey() {
  if (!audioCtx) return
  if (audioCtx.state === 'suspended') audioCtx.resume()
  if (audioCtx.state !== 'running') return
  const len = Math.floor(audioCtx.sampleRate * 0.03)
  const buffer = audioCtx.createBuffer(1, len, audioCtx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < len; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3)
  }
  const src = audioCtx.createBufferSource()
  const filter = audioCtx.createBiquadFilter()
  const gain = audioCtx.createGain()
  src.buffer = buffer
  filter.type = 'highpass'
  filter.frequency.value = 1200
  gain.gain.value = 0.12
  src.connect(filter)
  filter.connect(gain)
  gain.connect(audioCtx.destination)
  src.start()
}

function close() {
  visible.value = false
  timers.forEach(clearTimeout)
  timers = []
  cancelAnimationFrame(rafId)
}

function type() {
  lines.value = t.value.lines.map(() => '')
  let time = 700
  t.value.lines.forEach((line, li) => {
    for (let i = 1; i <= line.length; i++) {
      timers.push(setTimeout(() => {
        lines.value[li] = line.slice(0, i)
        playKey()
      }, time + i * SPEED))
    }
    time += line.length * SPEED + 380
  })
  timers.push(setTimeout(close, time + 1600))
}

// Se ejecuta con el primer toque del usuario sobre el robot
function startIntro() {
  if (started.value) return
  started.value = true
  ensureAudio()
  type()
}

// Al cambiar de idioma, vuelve a escribir la consola
function restart() {
  if (!visible.value || !started.value) return
  timers.forEach(clearTimeout)
  timers = []
  type()
}

watch(() => state.lang, restart)

// Lluvia tipo Matrix en el fondo de la consola
function sizeRain() {
  const c = rainCanvas.value
  if (!c) return
  const box = c.parentElement.getBoundingClientRect()
  c.width = box.width
  c.height = box.height
  ctx = c.getContext('2d')
  cols = Math.floor(c.width / FONT)
  drops = Array.from({ length: cols }, () => Math.random() * -30)
}

function drawRain(now) {
  if (!visible.value) return
  rafId = requestAnimationFrame(drawRain)
  if (now - lastFrame < 55) return
  lastFrame = now
  const c = rainCanvas.value
  if (!c || !ctx) return
  ctx.fillStyle = 'rgba(5, 7, 13, 0.14)'
  ctx.fillRect(0, 0, c.width, c.height)
  ctx.font = FONT + 'px monospace'
  for (let i = 0; i < cols; i++) {
    const ch = glyphs[Math.floor(Math.random() * glyphs.length)]
    const x = i * FONT
    const y = drops[i] * FONT
    ctx.fillStyle = '#d9ffe6'
    ctx.fillText(ch, x, y)
    ctx.fillStyle = 'rgba(0, 255, 65, 0.85)'
    ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], x, y - FONT)
    drops[i] += 0.5 + Math.random() * 0.5
    if (y > c.height && Math.random() > 0.975) drops[i] = 0
  }
}

function onKey(e) {
  if (e.key === 'Escape' || e.key === 'Enter') close()
}

onMounted(() => {
  sizeRain()
  rafId = requestAnimationFrame(drawRain)
  window.addEventListener('keydown', onKey)
  window.addEventListener('resize', sizeRain)
})

onBeforeUnmount(() => {
  timers.forEach(clearTimeout)
  cancelAnimationFrame(rafId)
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', sizeRain)
  if (audioCtx) audioCtx.close()
})
</script>

<template>
  <transition name="intro-fade">
    <div v-if="visible" class="intro-backdrop">
      <div class="intro-modal">

        <button class="intro-lang" @click="toggleLang">{{ state.lang === 'es' ? 'EN' : 'ES' }}</button>

        <div class="intro-robot" @click="startIntro">
          <svg viewBox="0 0 200 200" class="robot-svg" aria-hidden="true">
            <defs>
              <linearGradient id="robotGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#8b5cf6" />
                <stop offset="0.55" stop-color="#3b82f6" />
                <stop offset="1" stop-color="#22d3ee" />
              </linearGradient>
              <filter id="robotGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Antena -->
            <line x1="100" y1="30" x2="100" y2="14" stroke="url(#robotGrad)" stroke-width="2" />
            <circle cx="100" cy="11" r="5" fill="#22d3ee" class="antenna-light" filter="url(#robotGlow)" />

            <!-- Cabeza -->
            <rect x="52" y="30" width="96" height="72" rx="16" fill="rgba(7,16,28,0.9)" stroke="url(#robotGrad)" stroke-width="2" filter="url(#robotGlow)" />

            <!-- Ojos -->
            <rect x="72" y="58" width="16" height="16" rx="4" fill="#22d3ee" class="eye" filter="url(#robotGlow)" />
            <rect x="112" y="58" width="16" height="16" rx="4" fill="#22d3ee" class="eye" filter="url(#robotGlow)" />

            <!-- Lentes negros -->
            <line x1="52" y1="62" x2="66" y2="62" stroke="#050505" stroke-width="2.5" />
            <line x1="134" y1="62" x2="148" y2="62" stroke="#050505" stroke-width="2.5" />
            <rect x="66" y="54" width="28" height="22" rx="6" fill="#050505" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" />
            <rect x="106" y="54" width="28" height="22" rx="6" fill="#050505" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" />
            <line x1="94" y1="62" x2="106" y2="62" stroke="#050505" stroke-width="2.5" />
            <path d="M71 58 L77 58" stroke="rgba(255,255,255,0.35)" stroke-width="1.2" />
            <path d="M111 58 L117 58" stroke="rgba(255,255,255,0.35)" stroke-width="1.2" />

            <!-- Boca: barra de voz -->
            <rect x="82" y="84" width="36" height="4" rx="2" fill="#3b82f6" class="mouth" />

            <!-- Cuerpo -->
            <rect x="66" y="108" width="68" height="44" rx="10" fill="rgba(7,16,28,0.9)" stroke="url(#robotGrad)" stroke-width="1.5" />
            <circle cx="100" cy="130" r="5" fill="none" stroke="#38bdf8" stroke-width="1.5" class="core" />

            <!-- Manos sobre el teclado -->
            <rect x="52" y="132" width="14" height="10" rx="4" fill="#8b5cf6" class="hand left" />
            <rect x="134" y="132" width="14" height="10" rx="4" fill="#8b5cf6" class="hand right" />

            <!-- Teclado / consola -->
            <rect x="30" y="164" width="140" height="10" rx="5" fill="rgba(59,130,246,0.18)" stroke="rgba(0,174,255,0.4)" stroke-width="1" />
          </svg>
        </div>

        <div class="intro-console">
          <div class="intro-bar">
            <span></span><span></span><span></span>
            <b>{{ t.title }}</b>
          </div>
          <div class="intro-body">
            <canvas ref="rainCanvas" class="intro-rain" aria-hidden="true"></canvas>
            <p v-if="!started" class="intro-hint">
              <span class="prompt">&gt;</span> {{ hint }}<span class="intro-caret"></span>
            </p>
            <p v-for="(l, i) in lines" :key="i">
              <span class="prompt">&gt;</span> {{ l }}<span v-if="i === lines.length - 1" class="intro-caret"></span>
            </p>
          </div>
        </div>

        <!--button class="btn btn-primary intro-enter" @click="close">{{ t.enter }}</button-->
        <button class="btn btn-primary intro-enter">{{ t.enter_bien }}</button>

      </div>
    </div>
  </transition>
</template>