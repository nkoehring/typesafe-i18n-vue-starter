/* eslint-disable */
import type { Translation } from '../i18n-types'

const es = {
	apple: '{{Ninguna|Una|Dos|Un par|algunas|muchas}} Manzana{{s}}',
	hello: '¡Hola {name:string}! Por favor, deja una estrella si te gusta el proyecto: https://github.com/ivanhofer/typesafe-i18n',
	nested: {
		key: '¡Al nido, por así decirlo!',
	},
	world: 'Mundo',
} satisfies Translation

export default es
