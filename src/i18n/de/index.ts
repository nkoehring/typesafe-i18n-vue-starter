import type { BaseTranslation } from '../i18n-types'

const de = {
	hello: 'Hallo {name:string}! Bitte hinterlasse einen Stern, wenn dir das Projekt gefällt: https://github.com/ivanhofer/typesafe-i18n',
	world: 'Welt',
	apple: '{{Kein|Ein|Zwei|Ein paar|einige|viele}} {{Apfel|Äpfel}}',
} satisfies BaseTranslation

export default de
