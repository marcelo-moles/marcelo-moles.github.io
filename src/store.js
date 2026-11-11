import { reactive } from 'vue'

export const state = reactive({
  lang: (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es'
})

export const overlay = reactive({
  palette: false,
  toast: ''
})

let toastTimer = null
export function showToast(message) {
  overlay.toast = message
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { overlay.toast = '' }, 2200)
}

export function toggleLang() {
  state.lang = state.lang === 'es' ? 'en' : 'es'
}
