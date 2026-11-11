<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'
import Icon from './Icon.vue'
import ArchitectureFlow from './ArchitectureFlow.vue'

const t = computed(() => content[state.lang].architecture)

// Capas del diagrama (de arriba hacia abajo), igual que en el repositorio
const layerKeys = [
  { key: 'clients', icon: 'monitor' },
  { key: 'api', icon: 'globe' },
  { key: 'application', icon: 'settings' },
  { key: 'domain', icon: 'hexagon' },
  { key: 'infrastructure', icon: 'server' }
]

// Pilares técnicos: debajo del cuadro sinóptico
const pillars = {
  es: [
    { name: 'Clean Architecture',icon: 'layers' },
    { name: 'DDD', text: 'Modelado del dominio del negocio', icon: 'network' },
    { name: 'SOLID', text: 'Principios de diseño mantenible', icon: 'braces' },
    { name: 'REST', text: 'APIs con contratos claros', icon: 'globe' },
    { name: 'Microservicios', text: 'Servicios desacoplados y escalables', icon: 'gitbranch' }
  ],
  en: [
    { name: 'Clean Architecture', text: 'Dependencies point toward the domain', icon: 'layers' },
    { name: 'DDD', text: 'Modeling the business domain', icon: 'network' },
    { name: 'SOLID', text: 'Maintainable design principles', icon: 'braces' },
    { name: 'REST', text: 'APIs with clear contracts', icon: 'globe' },
    { name: 'Microservices', text: 'Decoupled, scalable services', icon: 'gitbranch' }
  ]
}

const pillarList = computed(() => pillars[state.lang])

// Principios de ingeniería
const principleKeys = [
  { key: 'clean', icon: 'layers' },
  { key: 'ddd', icon: 'network' },
  { key: 'microservices', icon: 'gitbranch' },
  { key: 'events', icon: 'workflow' }
]
</script>

<template>
  <section id="arquitectura" class="section architecture">
    <div class="container">

      <div class="section-header" v-reveal>
        <div>
          <p class="section-eyebrow">{{ t.eyebrow }}</p>
          <h2>{{ t.title }}</h2>
        </div>
      </div>

      <div class="architecture-intro" v-reveal>
        <p>{{ t.description }}</p>
      </div>

      <div class="architecture-diagram">
        <template v-for="(l, i) in layerKeys" :key="l.key">
          <div class="architecture-layer" :class="l.key" v-reveal>
            <div class="layer-icon">
              <Icon :name="l.icon" :size="22" />
            </div>
            <div class="layer-content">
              <span class="layer-label">{{ t.layers[l.key].label }}</span>
              <strong>{{ t.layers[l.key].title }}</strong>
              <small>{{ t.layers[l.key].description }}</small>
            </div>
          </div>
          <div v-if="i < layerKeys.length - 1" class="architecture-arrow">
            <Icon name="arrowdown" :size="20" />
          </div>
        </template>
      </div>

      <div class="architecture-principles">
        <article v-for="p in principleKeys" :key="p.key" class="principle-card" v-reveal>
          <div class="principle-icon">
            <Icon :name="p.icon" :size="20" />
          </div>
          <h3>{{ t.principles[p.key].title }}</h3>
          <p>{{ t.principles[p.key].description }}</p>
        </article>
      </div>

      <ArchitectureFlow v-reveal />

            <div class="arch-pillars">
        <article v-for="pl in pillarList" :key="pl.name" class="arch-pillar" v-reveal>
          <span class="arch-pillar-icon">
            <Icon :name="pl.icon" :size="20" />
          </span>
          <h3>{{ pl.name }}</h3>
        </article>
      </div>

    </div>
  </section>
</template>
