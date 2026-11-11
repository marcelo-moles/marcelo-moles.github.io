<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'
import Icon from './Icon.vue'

const t = computed(() => content[state.lang])
const gpaLabel = computed(() => (state.lang === 'es' ? 'Promedio' : 'GPA'))

// Separa el promedio (número al final del texto) del resto del detalle
function parse(detail) {
  const m = /(?:Promedio|GPA):?\s*([\d.,]+)\s*$/.exec(detail)
  return {
    gpa: m ? m[1] : '',
    text: detail.replace(/\s*[·•]?\s*(?:Promedio|GPA):?\s*[\d.,]+\s*$/, '').trim()
  }
}
</script>

<template>
  <section id="formacion" class="section">
    <div class="container">
      <header class="section-head" v-reveal>
        <span class="icon-box head-icon"><Icon name="graduation" :size="18" /></span>
        <p class="eyebrow">{{ t.education.eyebrow }}</p>
        <h2>{{ t.education.title }}</h2>
      </header>

      <div class="edu-list">
        <article v-for="(e, i) in t.education.items" :key="i" class="edu" v-reveal>
          <span class="icon-box"><Icon name="graduation" :size="18" /></span>
          <div class="edu-main">
            <span class="period">{{ e.period }}</span>
            <h3>{{ e.title }}</h3>
            <p class="org">{{ e.org }}</p>
            <p v-if="parse(e.detail).text" class="detail">{{ parse(e.detail).text }}</p>
          </div>
          <div v-if="parse(e.detail).gpa" class="gpa">
            <span class="gpa-value">{{ parse(e.detail).gpa }}</span>
            <span class="gpa-label">{{ gpaLabel }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
