<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

watch(isDark, (val) => {
  document.body.setAttribute('arco-theme', val ? 'dark' : '')
}, { immediate: true })
</script>

<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>
  </nav>
</template>
