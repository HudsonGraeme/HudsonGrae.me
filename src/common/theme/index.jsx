import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    cssVarPrefix: 'lfg',
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
});

export default theme;
