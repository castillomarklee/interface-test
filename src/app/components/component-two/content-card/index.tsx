'use client'

import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { Open_Sans } from "@next/font/google"
import { img } from "framer-motion/client"

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '500', '400', '600', '700', '800'],
})

export interface ImgProps {
  id: number
  imgSrc: string
  title: string
  description: string
}

export interface ContentCardProps {
  imgProps: ImgProps
  onImgClick?: (imgProps: ImgProps) => void
  onReadMoreClick?: (imgProps: ImgProps) => void
}

/**
 * A component that displays a card with an image, title, description and a 'Read more' link.
 *
 * @param {ContentCardProps} props - The props for the component.
 * @returns {JSX.Element} - The component.
 */
const ContentCard = ({
  imgProps,
  onImgClick,
  onReadMoreClick
}: ContentCardProps) => {
  const handleReadMoreClick = () => {
    if (onReadMoreClick) {
      onReadMoreClick(imgProps)
    }
  }

  const handleImgClick = () => {
    if (onImgClick) {
      onImgClick(imgProps)
    }
  }

  const {
    description,
    imgSrc,
    title,
    id
  } = imgProps

  return (
    <Box p={{ base: '0 20px', md: '0 20px', lg: '0 20px' }}>
      <Box
        h={{ base: '184px', md: '290px', lg: '290px' }}
        w={{ base: '254px', md: '384px', lg: '384px' }}
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
            transform: 'scale(1.1)',
            cursor: 'pointer'
          }}
          onClick={handleImgClick}
        />
      </Box>
      <Box w={{ base: '260px', md: '384px', lg: '384px' }}>
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
          id={`read-more-link-${id}`}
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