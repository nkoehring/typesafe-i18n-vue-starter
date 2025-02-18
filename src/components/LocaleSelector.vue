<script setup lang="ts">
import { ref, watch } from 'vue'
import { typesafeI18n } from '../i18n/i18n-vue'
import { locales } from '../i18n/i18n-util'

const { LL, locale, setLocale } = typesafeI18n()
const selectedLocale = ref(locale)
watch(selectedLocale, setLocale)
</script>

<template>
  <select v-model="selectedLocale">
    <option v-for="locale in locales">{{ locale }}</option>
  </select>
</template>
