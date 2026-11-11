<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'
import Icon from './Icon.vue'

const t = computed(() => content[state.lang])
const nowLabel = computed(() => (state.lang === 'es' ? 'Actual' : 'Present'))
const items = computed(() => t.value.experience.items)
</script>

<template>
  <section id="experiencia" class="section">
    <div class="container">
      <header class="section-head" v-reveal>
        <span class="icon-box head-icon"><Icon name="briefcase" :size="18" /></span>
        <p class="eyebrow">{{ t.experience.eyebrow }}</p>
        <h2>{{ t.experience.title }}</h2>
      </header>

      <ol class="timeline">
        <li v-for="(it, i) in items" :key="i" class="tl-item" v-reveal>
          <span class="tl-dot" :class="{ current: i === 0 }"></span>
          <article class="tl-card">
            <div class="tl-top">
              <span class="period">{{ it.period }}</span>
              <span v-if="i === 0" class="now">{{ nowLabel }}</span>
            </div>
            <h3>{{ it.role }}</h3>
            <p class="org">{{ it.org }}</p>
            <p class="exp-desc">{{ it.description }}</p>
            <ul>
              <li v-for="(b, j) in it.bullets" :key="j">{{ b }}</li>
            </ul>
            <div class="exp-tags">
              <span v-for="tg in it.tags" :key="tg" class="exp-tag">{{ tg }}</span>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>