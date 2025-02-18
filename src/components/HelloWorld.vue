<script setup lang="ts">
import { typesafeI18n } from '../i18n/i18n-vue'

defineProps<{ msg: string }>()
const { LL } = typesafeI18n()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div>
    <p>{{ LL.hello({ name: LL.world() }) }}</p>
    <ul>
      <li>{{ LL.apple(0) }}</li>
      <li>{{ LL.apple(1) }}</li>
      <li>{{ LL.apple(25) }}</li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
