'use client'

import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { Open_Sans } from "@next/font/google"

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '500', '400', '600', '700', '800'],
})

export interface ContentCardProps {
  id: number
  imgSrc: string
  title: string
  description: string
}

/**
 * A component that displays a card with an image, title, description and a 'Read more' link.
 *
 * @param {ContentCardProps} props - The props for the component.
 * @returns {JSX.Element} - The component.
 */
const ContentCard = ({
  description,
  id,
  imgSrc,
  title
}: ContentCardProps) => {
  const handleReadMoreClick = () => {
    console.log(`content with ${id} and title ${title} was clicked`)
  }

  return (
    <Box>
      <Box
        h="290px"
        w="384px"
        overflow="hidden"
        borderBottom="5px solid red"
        transition="0.5s ease-in-out"
        _hover={{
          borderBottom: 'none'
        }}
      >
        <Image
          src={imgSrc}
          alt="img_02_01"
          transition="0.3s"
          _hover={{
            transform: 'scale(1.1)'
          }}
        />
      </Box>
      <Box w="375px">
        <Heading
          className={openSans.className}
          fontSize="18px"
          color="white"
          mt="35px"
          mb="15px"
          fontWeight="400"
        >
          {title}
        </Heading>
        <Text
          color="white"
          className={openSans.className}
          fontWeight="300"
          fontSize="16px"
          lineHeight="1.7"
        >
          {description}
        </Text>
      </Box>
      <Box mt="50px">
        <Text
          as="a"
          display="inline-block"
          color="white"
          className={openSans.className}
          fontSize="18px"
          fontWeight="400"
          lineHeight="1.7"
          textDecoration="none"
          textTransform="uppercase"
          _after={{
            content: '""',
            display: 'block',
            height: 0,
            borderTop: '2px solid red',
            marginTop: '2px',
            transition: 'clip-path 0.2s ease-in',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          }}
          _hover={{
            cursor: 'pointer',
            _after: {
              clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            }
          }}
          onClick={handleReadMoreClick}
        >
          Read more
        </Text>
      </Box>
    </Box>
  )
}

export default ContentCard