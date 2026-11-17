// Envía un evento a Google Analytics cuando se descarga el CV
export function trackCv(language) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'cv_download', {
    cv_language: language,
    page_path: window.location.pathname
  })
}