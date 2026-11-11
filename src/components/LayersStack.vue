<script setup>
import { computed } from 'vue'
import { state } from '../store.js'

const t = computed(() => extra[state.lang].layers)
</script>

<template>
  <div class="layers">
    <p class="flow-title">{{ t.title }}</p>
    <ol class="layer-list">
      <li v-for="(l, i) in t.items" :key="l.title" class="layer" v-reveal>
        <span class="layer-index">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="layer-label">{{ l.label }}</span>
        <div class="layer-body">
          <h4>{{ l.title }}</h4>
          <p>{{ l.description }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>
