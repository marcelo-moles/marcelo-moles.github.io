<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'

const arch = computed(() => content[state.lang].architectureFlow)

// Nodos del diagrama dentro de un viewBox 960 x 230
const nodes = [
  { x: 0, y: 60 },
  { x: 200, y: 60 },
  { x: 400, y: 60 },
  { x: 640, y: 0 },
  { x: 640, y: 130 }
]
const W = 150
const H = 60

const paths = [
  'M150 90 L200 90',
  'M350 90 L400 90',
  'M550 90 C590 90 600 30 640 30',
  'M550 90 C590 90 600 160 640 160'
]
</script>

<template>
  <div class="flow">
    <div class="flow-head">
      <p class="flow-title">{{ arch.title }}</p>
      <p class="flow-caption">{{ arch.caption }}</p>
    </div>

    <svg viewBox="0 0 960 230" class="flow-svg" role="img" :aria-label="arch.title">
      <defs>
        <linearGradient id="flow-grad" x1="0" x2="1">
          <stop offset="0" stop-color="#8b5cf6" />
          <stop offset="1" stop-color="#22d3ee" />
        </linearGradient>
      </defs>

      <g v-for="(d, i) in paths" :key="'p' + i">
        <path :d="d" class="track" />
        <path :d="d" class="flow-line" />
        <circle r="3.5" class="pulse">
          <animateMotion :dur="(2.2 + i * 0.4) + 's'" repeatCount="indefinite" :path="d" />
        </circle>
      </g>

      <g v-for="(nd, i) in nodes" :key="'n' + i" class="node-g" :transform="`translate(${nd.x} ${nd.y})`">
        <rect :width="W" :height="H" rx="12" class="node" />
        <text :x="W / 2" y="34" text-anchor="middle" class="node-label">{{ arch.nodes[i] }}</text>
        <text :x="W / 2" :y="H + 20" text-anchor="middle" class="node-note">{{ arch.notes[i] }}</text>
      </g>
    </svg>
  </div>
</template>