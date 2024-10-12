'use client'

import { Box, Divider, Heading, Text } from "@chakra-ui/react"
import { Open_Sans } from '@next/font/google'
import STATIC_DATA from '../../../static-data/data.json'
import { handleContentClicks } from "@/app/utils/comp-events"

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '500', '400', '600', '700', '800'],
})


const TextContent = () => {
  const { COMP_1_CONTENT } = STATIC_DATA
  return (
    <Box w="100%">
      <Box>
        <Heading
          id="comp-1-heading"
          className={openSans.className}
          fontSize="25px"
          color="white"
          mb="15px"
          fontWeight="300"
          _hover={{
            cursor: 'pointer'
          }}
          onClick={(event) => handleContentClicks(event)}
        >
          {COMP_1_CONTENT.title}
        </Heading>
        <Divider
          className="component-divider"
          h="1px" 
          color="white" 
          borderRadius="10px" 
          backgroundColor="white" 
          orientation="horizontal"
        />
      </Box>
      <Box mt="25px">
        <Text
          color="white"
          className={openSans.className}
          fontSize="18px"
          lineHeight="1.7"
        >
          {COMP_1_CONTENT.content}
        </Text>
      </Box>
      <Box mt="50px">
        <Heading
          color="red"
          className={openSans.className}
          fontSize="16px"
          fontWeight={'400'}
          letterSpacing={'1.5px'}
          textTransform="uppercase"
        >
          {COMP_1_CONTENT.subtitle}
        </Heading>
        <Text
          color="white"
          className={openSans.className}
          fontSize="18px"
          fontWeight={'500'}
          lineHeight="1.7"
        >
          {COMP_1_CONTENT.subcontent}
        </Text>
      </Box>
    </Box>
  )
}

export default TextContent