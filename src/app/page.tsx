'use client'

import { Box, ScaleFade } from '@chakra-ui/react'
import ComponentOne from './components/component-one'
import ComponentTwo from './components/component-two'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const compTwoRef = useRef<HTMLDivElement | null>(null)

  const [isShowSecondComp, setIsShowSecondComp] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      setIsShowSecondComp(entry.isIntersecting)
    })

    observer.observe(compTwoRef.current as Element)
  }, [])

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
      <ScaleFade ref={compTwoRef} initialScale={0.9} in={isShowSecondComp}>
        <Box mt="200px">
          <ComponentTwo />
        </Box>
      </ScaleFade>
    </Box>
  )
}
