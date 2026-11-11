<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'
import Icon from './Icon.vue'

const t = computed(() => content[state.lang].projects)

// Íconos de cada tecnología (los mismos del repositorio)
const technologyIcons = {
  'C#': 'devicon:csharp',
  '.NET': 'devicon:dotnetcore',
  '.NET 8': 'devicon:dotnetcore',
  '.NET 9': 'devicon:dotnetcore',
  'ASP.NET Core': 'devicon:dotnetcore',
  'Java': 'devicon:java',
  'Python': 'devicon:python',
  'Node.js': 'devicon:nodejs',
  'NodeJS': 'devicon:nodejs',
  'Vue': 'devicon:vuejs',
  'Vue 3': 'devicon:vuejs',
  'React': 'devicon:react',
  'ReactJS': 'devicon:react',
  'TypeScript': 'devicon:typescript',
  'Vite': 'devicon:vitejs',
  'Pinia': 'devicon:pinia',
  'SQL Server': 'devicon:microsoftsqlserver',
  'MongoDB': 'devicon:mongodb',
  'Redis': 'devicon:redis',
  'Docker': 'devicon:docker',
  'Git': 'devicon:git',
  'GitLab': 'devicon:gitlab',
  'Kafka': 'simple-icons:apachekafka',
  'REST APIs': 'mdi:api',
  'REST API': 'mdi:api',
  'Dapper': 'mdi:database-search-outline',
  'Clean Architecture': 'mdi:layers-outline',
  'DDD': 'mdi:hexagon-outline',
  'Microservices': 'mdi:sitemap-outline',
  'Event-Driven': 'mdi:transit-connection-variant',
  'IA': 'simple-icons:claude',
  'AI': 'simple-icons:claude',
  'Data Analysis': 'mdi:chart-line-variant',
  'Data Visualization': 'mdi:chart-bell-curve-cumulative',
  'Large File Processing': 'mdi:file-multiple-outline'
}

function getTechnologyIcon(technology) {
  return technologyIcons[technology] ?? 'mdi:code-tags'
}
</script>

<template>
  <section id="proyectos" class="section projects-section">
    <div class="container">

      <div class="section-heading" v-reveal>
        <div>
          <p class="section-eyebrow">{{ t.eyebrow }}</p>
          <h2>{{ t.title }}</h2>
        </div>
      </div>

      <div class="projects-grid">
        <article v-for="(project, index) in t.items" :key="project.id" class="project-card" v-reveal>

          <div class="project-card-top">
            
            <span class="project-status">{{ project.status }}</span>
          </div>

          <div class="project-icon">
            <Icon name="mdi:code-braces" :size="16" />
          </div>

          <h3>{{ project.title }}</h3>

          <p class="project-description">{{ project.description }}</p>

          <div class="project-technologies">
            <span v-for="technology in project.tags" :key="technology" class="technology-chip">
              <Icon :name="getTechnologyIcon(technology)" class="technology-icon" />
              <span>{{ technology }}</span>
            </span>
          </div>

          <div class="project-footer">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="github-button">
              <Icon name="mdi:github" :size="16" />
              <span>{{ t.github }}</span>
              <Icon name="mdi:arrow-top-right" :size="13" />
            </a>
            <span v-else class="github-button github-disabled">
              <Icon name="mdi:github" :size="16" />
              <span>{{ t.noRepo }}</span>
            </span>
          </div>

        </article>
      </div>
    </div>
  </section>
</template>