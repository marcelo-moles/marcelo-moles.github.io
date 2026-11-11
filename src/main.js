import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// v-reveal: los elementos suben suavemente desde abajo al entrar en pantalla
// y vuelven a bajar al salir, así el efecto se repite al subir y bajar.
// Los títulos y subtítulos de cada sección aparecen primero; el contenido, después.
const HEAD_SELECTOR = '.section-head, .section-header, .contact-head'

app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal')

    const isHead = el.matches(HEAD_SELECTOR)
    let delay = 0
    if (!isHead) {
      // Contenido: empieza después del título, con escalonado entre hermanos
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children).filter(c => c.hasAttribute('data-reveal') && !c.matches(HEAD_SELECTOR))
        : []
      delay = 480 + Math.min(siblings.length, 6) * 150
    }
    el.style.setProperty('--delay', delay + 'ms')
    el.setAttribute('data-reveal', '')

    el._io = new IntersectionObserver(([entry]) => {
      el.classList.toggle('in', entry.isIntersecting)
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
    el._io.observe(el)
  },
  unmounted(el) {
    if (el._io) el._io.disconnect()
  }
})

app.mount('#app')
