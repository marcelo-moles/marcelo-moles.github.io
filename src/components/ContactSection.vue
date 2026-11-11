<script setup>
import { computed, ref } from 'vue'
import * as SI from 'simple-icons'
import { state, showToast } from '../store.js'

import { content, cvFiles } from '../content.js'

import Icon from './Icon.vue'
import ContactForm from './ContactForm.vue'

const t = computed(() => content[state.lang])

const u = computed(() => content[state.lang].ui)
const x = computed(() => content[state.lang].contact)

const showForm = ref(false)

// Email, LinkedIn, GitHub (del repositorio) y WhatsApp
const links = computed(() => {
  const base = t.value.contact.links
  return [
    base[0],
    base[1],
    { label: x.value.github.label, value: x.value.github.value, href: 'https://github.com/marcelo-moles', icon: 'siGithub' },
    base[2]
  ]
})

function brand(slug) {
  const icon = slug && SI[slug]
  return icon ? icon.path : ''
}

function copy(item) {
  navigator.clipboard?.writeText(item.value)
  showToast(`${item.label} · ${state.lang === 'es' ? 'copiado' : 'copied'}`)
}
</script>

<template>
  <section id="contacto" class="section contact">
    <div class="container">
      <header class="contact-head" v-reveal>
        <span class="icon-box head-icon"><Icon name="mail" :size="18" /></span>
        <p class="eyebrow">{{ t.contact.eyebrow }}</p>
        <h2 class="contact-title gradient-text">{{ t.contact.title }}</h2>
        <p class="lead">{{ t.contact.text }}</p>
        <p class="availability"><span class="availability-dot"></span>{{ x.availability }}</p>
        <div class="cv-buttons">
          <a :href="cvFiles.es" download class="btn btn-primary">PDF · Español</a>
          <a :href="cvFiles.en" download class="btn btn-ghost">PDF · English</a>
        </div>
      </header>

      <div class="contact-cards">
        <article v-for="l in links" :key="l.label" class="contact-card" v-reveal>
          <span class="contact-icon">
            <svg v-if="l.icon.startsWith('si')" viewBox="0 0 24 24" aria-hidden="true">
              <path :d="brand(l.icon)" fill="currentColor" />
            </svg>
            <Icon v-else :name="l.icon" :size="15" />
          </span>
          <span class="contact-label">{{ l.label }}</span>
          <a :href="l.href" target="_blank" rel="noopener" class="contact-value">{{ l.value }}</a>
          <button class="copy-btn" @click="copy(l)">{{ u.copy }}</button>
        </article>
      </div>

      <div class="form-toggle" v-reveal>
        <button class="btn btn-ghost" @click="showForm = !showForm">
          <Icon name="mail" :size="15" />
          {{ showForm ? x.closeForm : x.openForm }}
        </button>
      </div>

      <ContactForm v-if="showForm" class="form-wrap" @close="showForm = false" />

      <div class="languages" v-reveal>
        <span class="lang-title">{{ t.contact.languages.title }}</span>
        <span v-for="l in t.contact.languages.items" :key="l" class="lang-item">{{ l }}</span>
      </div>
    </div>
  </section>
</template>
