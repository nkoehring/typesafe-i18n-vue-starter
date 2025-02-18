/* eslint-disable */
import type { Translation } from '../i18n-types'

const en = {
	apple: '{{No|One|Two|A few|Some|Many}} apple{{s}}',
	hello: 'Hello {name:string}! Please leave a star if you like the project: https://github.com/ivanhofer/typesafe-i18n',
	nested: {
		key: 'Into the nest, so to speak!',
	},
	world: 'World',
} satisfies Translation

export default en
