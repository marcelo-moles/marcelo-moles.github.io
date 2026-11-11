<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'
import Icon from './Icon.vue'

const items = computed(() => content[state.lang].focus)

</script>

<template>
  <div class="focus-grid">
    <article v-for="(f, i) in items" :key="i" class="focus-card" v-reveal>
      <span class="icon-box"><Icon :name="f.icon" :size="18" /></span>
      <h3>{{ f.title }}</h3>
      <p>{{ f.body }}</p>
    </article>
  </div>
</template>
