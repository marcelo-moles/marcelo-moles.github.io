import { reactive } from 'vue'

export const state = reactive({
  lang: (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es'
})

export const overlay = reactive({
  palette: false,
  toast: ''
})

// Tema: 'dark' (por defecto) o 'light'. Se recuerda entre visitas.
const savedTheme = localStorage.getItem('theme')
export const themeState = reactive({
  mode: savedTheme === 'light' ? 'light' : 'dark'
})

function applyTheme(mode) {
  document.documentElement.dataset.theme = mode
}
applyTheme(themeState.mode)

export function toggleTheme() {
  themeState.mode = themeState.mode === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', themeState.mode)
  applyTheme(themeState.mode)
}

let toastTimer = null
export function showToast(message) {
  overlay.toast = message
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { overlay.toast = '' }, 2200)
}

export function toggleLang() {
  state.lang = state.lang === 'es' ? 'en' : 'es'
}