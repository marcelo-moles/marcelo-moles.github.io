<script setup>
import { ref, computed, onMounted } from 'vue'
import { state } from '../store.js'

// Espacio de nombres propio del portafolio en Abacus
const NS = 'marcelo-moles-portafolio'
const BASE = 'https://abacus.jasoncameron.dev'

// Día local en formato AAAA-MM-DD: la clave diaria cambia cada día
const today = new Date().toLocaleDateString('en-CA')

const total = ref(null)
const daily = ref(null)

const labels = computed(() =>
  state.lang === 'es'
    ? { hoy: 'Visitas hoy', total: 'Visitas totales' }
    : { hoy: 'Visits today', total: 'Total visits' }
)

// Intenta leer la clave. Si no existe, la crea con hit (suma 1).
async function countKey(key, shouldCount) {
  try {
    const action = shouldCount ? 'hit' : 'get'
    let r = await fetch(`${BASE}/${action}/${NS}/${key}`)
    let j = await r.json()

    // Si no existe la clave, la creamos con hit
    if (j.error && action === 'get') {
      r = await fetch(`${BASE}/hit/${NS}/${key}`)
      j = await r.json()
    }
    return typeof j.value === 'number' ? j.value : null
  } catch (e) {
    return null
  }
}

onMounted(async () => {
  // Una vez por pestaña: suma a los totales; luego solo se leen
  const alreadyCounted = sessionStorage.getItem('visitCounted') === '1'

  total.value = await countKey('visitas-total', !alreadyCounted)
  daily.value = await countKey('visitas-' + today, !alreadyCounted)

  if (!alreadyCounted) sessionStorage.setItem('visitCounted', '1')
})
</script>

<template>
  <div class="visits">
    <span>{{ labels.hoy }}: <b>{{ daily ?? '—' }}</b></span>
    <span>{{ labels.total }}: <b>{{ total ?? '—' }}</b></span>
  </div>
</template>