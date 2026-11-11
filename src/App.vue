<script setup>
import { watchEffect, onMounted, onBeforeUnmount } from 'vue'
import { state, overlay } from './store.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import SectionDivider from './components/SectionDivider.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ArchitectureSection from './components/ArchitectureSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import CommandPalette from './components/CommandPalette.vue'
import IntroModal from './components/IntroModal.vue'

watchEffect(() => {
  document.documentElement.lang = state.lang
  document.title = 'Marcelo Molina · Senior Backend .NET Developer'
})

function onMove(e) {
  document.documentElement.style.setProperty('--mx', e.clientX + 'px')
  document.documentElement.style.setProperty('--my', e.clientY + 'px')
}

onMounted(() => window.addEventListener('pointermove', onMove, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('pointermove', onMove))
</script>

<template>
  <div class="spotlight" aria-hidden="true"></div>
  <IntroModal />
  <NavBar />
  <main>
    <HeroSection />
    <SectionDivider />
    <AboutSection />
    <SectionDivider />
    <ExperienceSection />
    <SectionDivider />
    <SkillsSection />
    <SectionDivider />
    <ProjectsSection />
    <SectionDivider />
    <ArchitectureSection />
    <SectionDivider />
    <EducationSection />
    <SectionDivider />
    <ContactSection />
  </main>
  <SiteFooter />
  <CommandPalette />
  <transition name="toast">
    <div v-if="overlay.toast" class="toast" role="status">{{ overlay.toast }}</div>
  </transition>
</template>
