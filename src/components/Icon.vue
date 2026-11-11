<script setup>
import { computed } from 'vue'
import { Icon as IconifyIcon } from '@iconify/vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 18 }
})

// Nombres internos del sitio -> íconos de Iconify (set Lucide)
const map = {
  user: 'lucide:user',
  briefcase: 'lucide:briefcase',
  cpu: 'lucide:cpu',
  graduation: 'lucide:graduation-cap',
  mail: 'lucide:mail',
  download: 'lucide:download',
  arrow: 'lucide:arrow-right',
  arrowdown: 'lucide:arrow-down',
  menu: 'lucide:menu',
  close: 'lucide:x',
  code: 'lucide:code',
  layers: 'lucide:layers',
  database: 'lucide:database',
  server: 'lucide:server',
  monitor: 'lucide:monitor',
  repeat: 'lucide:repeat',
  sparkles: 'lucide:sparkles',
  network: 'lucide:network',
  braces: 'lucide:braces',
  gitbranch: 'lucide:git-branch',
  workflow: 'lucide:workflow',
  zap: 'lucide:zap',
  layout: 'lucide:layout-grid',
  globe: 'lucide:globe',
  settings: 'lucide:settings',
  hexagon: 'lucide:hexagon',
  boxes: 'lucide:boxes',
  external: 'lucide:external-link',
  lock: 'lucide:lock',
  barchart: 'lucide:bar-chart-3',
  file: 'lucide:file-text'
}

// Si el nombre no está en el mapa, se usa directamente como id de Iconify (ej. 'mdi:home')
const icon = computed(() => map[props.name] || props.name)
</script>

<template>
  <IconifyIcon :icon="icon" :width="size" :height="size" aria-hidden="true" />
</template>