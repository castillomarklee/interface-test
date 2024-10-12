import { Box, ScaleFade } from '@chakra-ui/react'
import styles from './page.module.scss'
import ComponentOne from './components/component-one'
import ComponentTwo from './components/component-two'

export default function Home() {
  return (
    <Box
      w="100"
      h="100vh"
      bgColor="#0F1414"
      p="200px 0"
      overflowY="auto"
    >
      <ScaleFade initialScale={0.9} in={true}>
        <ComponentOne />
      </ScaleFade>
      <ScaleFade initialScale={0.9} in={true}>
        <Box mt="200px">
          <ComponentTwo />
        </Box>
      </ScaleFade>
    </Box>
  )
}
