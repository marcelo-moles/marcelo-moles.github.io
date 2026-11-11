<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'
import CountValue from './CountValue.vue'
import FocusCards from './FocusCards.vue'
import Icon from './Icon.vue'

const t = computed(() => content[state.lang])
</script>

<template>
  <section id="sobre-mi" class="section">
    <div class="container">
      <header class="section-head" v-reveal>
        <span class="icon-box head-icon"><Icon name="user" :size="18" /></span>
        <p class="eyebrow">{{ t.about.eyebrow }}</p>
        <h2>{{ t.about.title }}</h2>
      </header>

      <div class="about-grid">
        <div class="about-text" v-reveal>
          <p v-for="(p, i) in t.about.paragraphs" :key="i">{{ p }}</p>
        </div>

        <div class="stats" v-reveal>
          <div v-for="s in t.about.stats" :key="s.label" class="stat">
            <span class="stat-value"><CountValue :value="s.value" /></span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <FocusCards />
    </div>
  </section>
</template>
