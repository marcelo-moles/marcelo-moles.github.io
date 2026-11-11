<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'

const t = computed(() => content[state.lang])
const rights = computed(() => (state.lang === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'))
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span>© 2026 Marcelo Molina · {{ rights }}</span>
      <span>{{ t.footer }}</span>
    </div>
  </footer>
</template>
