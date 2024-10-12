'use client'

import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import { Open_Sans } from '@next/font/google'
import STATIC_DATA from '../../static-data/data.json'
import ContentCard, { ContentCardProps, ImgProps } from './content-card'
import ImgModal from '../modal/img-modal'
import { useState } from 'react'
import { handleContentClicks } from '@/app/utils/comp-events'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '500', '400', '600', '700', '800'],
})

const ComponentTwo = () => {
  const { COMP_2_CONTENT } = STATIC_DATA

  const [selectedImg, setSelectedImg] = useState('')

  const onImgClick = (context: ImgProps) => {
    setSelectedImg(context.imgSrc)
  }

  const onReadMoreClick = (id: number) => {
    console.log(`The element with ${id} has been clicked`)
  }

  return (
    <ImgModal
      imgSrc={selectedImg}
      render={({ onOpen }) => (
        <Flex
          alignItems="center"
          justifyContent="center"
          w="100%"
        >
          <Box>
            <Heading
              className={openSans.className}
              fontSize="38px"
              color="white"
              marginBottom="15px"
              fontWeight="300"
              textTransform="uppercase"
              w="100%"
              textAlign="center"
            >
              All the latest from AEG
            </Heading>
            <Grid
              templateColumns={{
                base: 'repeat(1, 2fr)',
                sm: 'repeat(1, 2fr)',
                md: 'repeat(1, 2fr)',
                lg: 'repeat(3, 2fr)'
              }}
              gap={6}
              mt="60px"
            >
              {COMP_2_CONTENT.map((content) => (
                <ContentCard
                  key={content.id}
                  imgProps={content}
                  onImgClick={(data) => {
                    onImgClick(data)
                    onOpen?.call(null)
                  }}
                  onReadMoreClick={(data) => onReadMoreClick(data.id)}
                />
              ))}
            </Grid>
          </Box>
        </Flex>
      )}
    />
  )
}

export default ComponentTwo