/* eslint-disable */
import type { BaseTranslation } from '../i18n-types'

const de = {
	apple: '{{Kein|Ein|Zwei|Ein paar|einige|viele}} {{Apfel|Äpfel}}',
	hello: 'Hallo {name:string}! Bitte hinterlasse einen Stern, wenn dir das Projekt gefällt: https://github.com/ivanhofer/typesafe-i18n',
	nested: {
		key: 'Ins gemachte Nest, sozusagen!',
	},
	world: 'Welt',
} satisfies BaseTranslation

export default de
