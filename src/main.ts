import { createApp } from 'vue'
import './style.css'
import { navigatorDetector } from 'typesafe-i18n/detectors'
import { detectLocale, locales, namespaces } from './i18n/i18n-util'
import { loadLocale } from './i18n/i18n-util.sync'
import { loadLocaleAsync, loadNamespaceAsync } from './i18n/i18n-util.async'
import { i18nPlugin } from './i18n/i18n-vue'
import App from './App.vue'

const detectedLocale = detectLocale(navigatorDetector)
const decidedLocale = locales.indexOf(detectedLocale) >= 0 ? detectedLocale : locales[0]

// load other locales async
// this works well for few translation strings,
// but should be changed to a more sensible approach as the project grows
locales.forEach((l) => {
  if (l === decidedLocale) return
  void loadLocaleAsync(l)
  namespaces.forEach(ns => void loadNamespaceAsync(l, ns))
})
// load initial locale and its namespaces sync
loadLocale(decidedLocale)

createApp(App)
.use(i18nPlugin, detectedLocale)
.mount('#app')
