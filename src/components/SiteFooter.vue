<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'
import VisitCounter from './VisitCounter.vue'

const t = computed(() => content[state.lang])
const rights = computed(() => (state.lang === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'))
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span>© 2026 Marcelo Molina · {{ rights }}</span>
      <VisitCounter />
      <span>{{ t.footer }}</span>
    </div>
  </footer>
</template>