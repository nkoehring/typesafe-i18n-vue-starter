import type { Translation } from '../i18n-types'

const en = {
	hello: 'Hi {name}! Please leave a star if you like this project: https://github.com/ivanhofer/typesafe-i18n',
	world: 'world',
	apple: '{{No|One|Two|A few|Some|Many}} apple{{s}}',
} satisfies Translation

export default en
