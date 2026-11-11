<script setup>
import { computed } from 'vue'
import { state } from '../store.js'

import { content, cvFiles } from '../content.js'

import ParticleField from './ParticleField.vue'
import TypeWriter from './TypeWriter.vue'
import Icon from './Icon.vue'
import fotoPerfil from '../assets/yo.jpg'

const t = computed(() => content[state.lang])

const u = computed(() => content[state.lang].ui)
const x = computed(() => content[state.lang].hero)

</script>

<template>
  <section id="inicio" class="hero">
    <ParticleField />
    <div class="container hero-grid">
      <div class="hero-text">
        <p class="eyebrow" v-reveal>{{ t.hero.eyebrow }}</p>
        <h1 class="hero-name" v-reveal>
          <span class="shimmer">{{ t.hero.name }}</span>
        </h1>
        <p class="hero-role" v-reveal><TypeWriter /></p>
        <p class="hero-intro" v-reveal>{{ t.hero.intro }}</p>

        <div class="hero-actions" v-reveal>
          <a href="#experiencia" class="btn btn-primary">{{ t.ui.experience }}</a>
          <a href="#proyectos" class="btn btn-ghost">{{ x.btnProjects }}</a>

          <a :href="cvFiles.es" download class="btn btn-ghost">{{ t.ui.cv }} · <Icon name="tabler-flags:argentina" :size="15" /></a>
          <a :href="cvFiles.en" download class="btn btn-ghost">{{ t.ui.cv }} · <Icon name="tabler-flags:united-states" :size="15" /></a>

        </div>
      </div>

      <div class="hero-visual" v-reveal>
        <div class="photo-frame">
          <span class="frame-ring"></span>
          <img :src="fotoPerfil" alt="Marcelo Molina" class="hero-photo" />
        </div>
      </div>
    </div>
  </section>
</template>
