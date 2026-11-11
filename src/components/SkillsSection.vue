<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'
import Icon from './Icon.vue'

const t = computed(() => content[state.lang].skills)
</script>

<template>
  <section id="habilidades" class="section">
    <div class="container">
      <header class="section-head" v-reveal>
        <span class="icon-box head-icon"><Icon name="cpu" :size="18" /></span>
        <p class="eyebrow">{{ t.eyebrow }}</p>
        <h2>{{ t.title }}</h2>
      </header>

      <div class="skill-groups">
        <article v-for="g in t.groups" :key="g.title" class="skill-card" v-reveal>
          <header class="skill-head">
            <span class="icon-box">
              <Icon :name="g.icon" :size="18" />
            </span>
            <div>
              <span class="kicker">{{ g.category }}</span>
              <h3>{{ g.title }}</h3>
            </div>
          </header>

          <div class="chips">
            <span v-for="it in g.items" :key="it.name" class="chip">
              <Icon :name="it.icon" :size="15" class="chip-brand" />
              {{ it.name }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>