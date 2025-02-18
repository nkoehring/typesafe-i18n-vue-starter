import { createApp } from 'vue'
import './style.css'
import { navigatorDetector } from 'typesafe-i18n/detectors'
import { detectLocale, locales } from './i18n/i18n-util'
import { loadLocale } from './i18n/i18n-util.sync'
import { loadLocaleAsync } from './i18n/i18n-util.async'
import { i18nPlugin } from './i18n/i18n-vue'
import App from './App.vue'

const detectedLocale = detectLocale(navigatorDetector)
const decidedLocale = locales.indexOf(detectedLocale) >= 0 ? detectedLocale : locales[0]

// load other locales async
locales.forEach(l => {
  if (l === decidedLocale) return // will be loaded syncronously
  void loadLocaleAsync(l)
})
// load initial locale sync
loadLocale(decidedLocale)

createApp(App)
.use(i18nPlugin, detectedLocale)
.mount('#app')
