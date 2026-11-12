<script setup>
import { ref, computed } from 'vue'
import { state, toggleLang, overlay, themeState, toggleTheme } from '../store.js'
import { content } from '../content.js'
import Icon from './Icon.vue'

const x = computed(() => content[state.lang].nav)
const u = computed(() => content[state.lang].ui)
const open = ref(false)

const links = [
  { key: 'about', href: '#sobre-mi' },
  { key: 'experience', href: '#experiencia' },
  { key: 'skills', href: '#habilidades' },
  { key: 'projects', href: '#proyectos' },
  { key: 'engineering', href: '#arquitectura' },
  { key: 'education', href: '#formacion' },
  { key: 'contact', href: '#contacto' }
]
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <div class="nav-start">
        <span class="brand" aria-hidden="true">
          <span class="brand-mark"><span class="gradient-text">MM</span></span>
        </span>
        <a href="#inicio" class="home-link">{{ x.home }}</a>
      </div>

      <nav class="nav-links" :class="{ show: open }">
        <a v-for="l in links" :key="l.key" :href="l.href" @click="open = false">{{ x[l.key] }}</a>
      </nav>

      <div class="nav-actions">
        <button class="search-btn" @click="overlay.palette = true" :aria-label="u.search">
          <span>{{ u.search }}</span>
          <kbd>{{ u.shortcut }}</kbd>
        </button>
        <button class="lang" @click="toggleLang" :aria-label="u.switchLang">{{ state.lang === 'es' ? 'EN' : 'ES' }}</button>
        <button class="theme-btn" @click="toggleTheme" :aria-label="themeState.mode === 'dark' ? 'Tema claro' : 'Tema oscuro'">
          <Icon :name="themeState.mode === 'dark' ? 'lucide:sun' : 'lucide:moon'" :size="16" />
        </button>
        <button class="burger" @click="open = !open" aria-label="Menú">
          <span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>