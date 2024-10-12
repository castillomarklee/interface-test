'use client'

import { extendTheme, ChakraProvider as Provider } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans Condensed Light', sans-serif`,
  },
})

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return <Provider theme={theme}>
    {children}
  </Provider>
}