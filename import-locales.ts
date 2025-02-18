import 'dotenv/config'
import type { BaseTranslation } from "typesafe-i18n";
import { storeTranslationsToDisk, type ImportLocaleMapping } from 'typesafe-i18n/importer'
import { locales, namespaces } from './src/i18n/i18n-util'
import type { Locales, Namespaces } from './src/i18n/i18n-types'

const PID = process.env.TOLGEE_PROJECT ?? 'no-project-id-configured'
const KEY = process.env.TOLGEE_API_KEY ?? 'no-api-key-configured'

const fetchFromApi = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'X-API-Key': KEY,
    },
  })
  
  return response
}

const fetchNamespacedLocales = async (ns: Namespaces) => {
  const lang = locales.join(',')
  const url = `https://app.tolgee.io/v2/projects/${PID}/translations/${lang}?structureDelimiter=.&ns=${ns}`
  const response = await fetchFromApi(url)
  return await response.json()
}

const fetchAll = async (): Promise<BaseTranslation> => {
  const lang = locales.join(',')
  const url = `https://app.tolgee.io/v2/projects/${PID}/translations/${lang}?structureDelimiter=.`

  const response = await fetchFromApi(url)
  const translations = await response.json() as BaseTranslation

  for (const ns of namespaces) {
    const response = await fetchNamespacedLocales(ns)
    Object.keys(response).forEach(locale => {
      translations[locale][ns] = response[locale]
    })
  }

  return translations
}

const translations = await fetchAll()
const mappings = Object.keys(translations).map(locale => ({
  locale,
  translations: translations[locale],
  namespaces,
} as ImportLocaleMapping))

const result = await storeTranslationsToDisk(mappings)
console.log('imported translations from Tolgee', result)
