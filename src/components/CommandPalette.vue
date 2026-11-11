<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { state, overlay, toggleLang, showToast } from '../store.js'
import { content, cvFiles } from '../content.js'

const query = ref('')
const active = ref(0)
const input = ref(null)

const t = computed(() => content[state.lang])
const u = computed(() => content[state.lang].ui)

const items = computed(() => {
  const sections = [
    { label: t.value.nav.about, run: () => go('#sobre-mi'), group: u.value.sections },
    { label: t.value.nav.experience, run: () => go('#experiencia'), group: u.value.sections },
    { label: t.value.nav.skills, run: () => go('#habilidades'), group: u.value.sections },
    { label: content[state.lang].architectureFlow.title, run: () => go('#arquitectura'), group: u.value.sections },
    { label: t.value.nav.education, run: () => go('#formacion'), group: u.value.sections },
    { label: t.value.nav.contact, run: () => go('#contacto'), group: u.value.sections }
  ]
  const actions = [
    { label: u.value.copyEmail, run: copyEmail, group: u.value.actions },
    { label: u.value.downloadCv, run: downloadCv, group: u.value.actions },
    { label: u.value.switchLang, run: toggleLang, group: u.value.actions }
  ]
  const all = [...sections, ...actions]
  const q = query.value.trim().toLowerCase()
  return q ? all.filter(i => i.label.toLowerCase().includes(q)) : all
})

function go(hash) {
  close()
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function copyEmail() {
  navigator.clipboard?.writeText('juanmarcelomolina2@gmail.com')
  close()
  showToast(u.value.copied)
}

function downloadCv() {
  const a = document.createElement('a')
  a.href = cvFiles[state.lang]
  a.download = ''
  a.click()
  close()
}

function close() {
  overlay.palette = false
  query.value = ''
  active.value = 0
}

function runActive() {
  items.value[active.value]?.run()
}

function onKey(e) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    overlay.palette = !overlay.palette
    return
  }
  if (!overlay.palette) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowDown') { e.preventDefault(); active.value = (active.value + 1) % items.value.length }
  if (e.key === 'ArrowUp') { e.preventDefault(); active.value = (active.value - 1 + items.value.length) % items.value.length }
  if (e.key === 'Enter') { e.preventDefault(); runActive() }
}

watch(() => overlay.palette, async open => {
  if (open) {
    await nextTick()
    input.value?.focus()
  }
})

watch(query, () => { active.value = 0 })

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div v-if="overlay.palette" class="palette-backdrop" @click.self="close">
    <div class="palette" role="dialog" aria-modal="true">
      <input
        ref="input"
        v-model="query"
        class="palette-input"
        type="text"
        :placeholder="u.placeholder"
      />
      <ul class="palette-list">
        <li
          v-for="(it, i) in items"
          :key="it.label"
          class="palette-item"
          :class="{ active: i === active }"
          @mouseenter="active = i"
          @click="it.run()"
        >
          <span>{{ it.label }}</span>
          <small>{{ it.group }}</small>
        </li>
        <li v-if="!items.length" class="palette-empty">{{ u.noResults }}</li>
      </ul>
    </div>
  </div>
</template>
