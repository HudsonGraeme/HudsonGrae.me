import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
		cssVarPrefix: 'lfg',
	},
	styles: {
		global: {
			body: {
				bg: 'black',
				color: 'white',
			},
		},
	},
	components: {
		Button: {
			variants: {
				primary: {
					bg: 'purple.600',
					color: 'white',
				},
				secondary: {
					bg: 'gray.700',
					color: 'white',
					rounded: 'full',
				},
			},
		},
	},
})

export default theme
