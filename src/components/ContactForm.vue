<script setup>
import { ref, computed } from 'vue'
import { state } from '../store.js'
import { content } from '../content.js'

const emit = defineEmits(['close'])
const f = computed(() => content[state.lang].contact.form)

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const sending = ref(false)
const sent = ref(false)
const error = ref('')

async function send() {
  error.value = ''
  sent.value = false
  if (!name.value || !email.value || !subject.value || !message.value) {
    error.value = f.value.errorRequired
    return
  }
  sending.value = true
  try {
    const response = await fetch('https://formspree.io/f/moeqonlw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value, subject: subject.value, message: message.value })
    })
    if (!response.ok) throw new Error('Formspree request failed')
    sent.value = true
    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
  } catch {
    error.value = f.value.errorSend
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div class="contact-form">
    <div class="form-head">
      <h3>{{ f.title }}</h3>
      <button type="button" class="form-close" aria-label="Close" @click="emit('close')">✕</button>
    </div>

    <form @submit.prevent="send">
      <div class="form-row">
        <label class="form-field">
          <span>{{ f.name }}</span>
          <input v-model="name" type="text" autocomplete="name" />
        </label>
        <label class="form-field">
          <span>{{ f.email }}</span>
          <input v-model="email" type="email" autocomplete="email" />
        </label>
      </div>

      <label class="form-field">
        <span>{{ f.subject }}</span>
        <input v-model="subject" type="text" />
      </label>

      <label class="form-field">
        <span>{{ f.message }}</span>
        <textarea v-model="message" rows="5"></textarea>
      </label>

      <p v-if="error" class="form-msg error">{{ error }}</p>
      <p v-if="sent" class="form-msg success">{{ f.success }}</p>

      <div class="form-actions">
        <button type="button" class="btn btn-ghost" @click="emit('close')">{{ f.cancel }}</button>
        <button type="submit" class="btn btn-primary" :disabled="sending">
          {{ sending ? f.sending : f.send }}
        </button>
      </div>
    </form>
  </div>
</template>
