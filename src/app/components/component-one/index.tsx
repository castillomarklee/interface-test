'use client'

import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react"
import TextContent from "./text-content"
import { handleContentClicks } from "@/app/utils/comp-events"
import STATIC_DATA from '../../static-data/data.json'
import { MouseEvent, useState } from "react"
import ImgModal from "../modal/img-modal"

const ComponentOne = () => {
  const { COMP_1_CONTENT } = STATIC_DATA

  const [selectedImgSrc, setSelectedImgSrc] = useState('')

  const hasImages = !!COMP_1_CONTENT.images.length

  const fisrtImgSrc = hasImages ? COMP_1_CONTENT.images[0] : ''

  /**
   * moreImages assumes there are 2 or more images. It will only get the 2nd and 3rd images to display.
   */
  const moreImages = hasImages ? COMP_1_CONTENT.images.slice(1, COMP_1_CONTENT.images.length) : []


  const handleImgClicks = (src: string, event: MouseEvent<HTMLImageElement, globalThis.MouseEvent>) => {
    setSelectedImgSrc(src)
    handleContentClicks(event)
  }

  return (
    <ImgModal
      imgSrc={selectedImgSrc}
      render={({ onOpen }) => (
        <Flex
          padding={{
            base: '0 10px',
            sm: '0 20px',
            md: '0 50px',
            lg: '0, auto'
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            templateColumns={{
              base: 'repeat(1, 2fr)',
              sm: 'repeat(1, 2fr)',
              md: 'repeat(1, 2fr)',
              lg: 'repeat(3, 2fr)'
            }}
            gap={6}
          >
            <GridItem>
              <Box h="600px" w="384px" overflow="hidden">
                <Image
                  id="com-1-img-01"
                  src={fisrtImgSrc}
                  alt="img_01"
                  transition="0.3s"
                  _hover={{
                    transform: 'scale(1.1)',
                    cursor: 'pointer'
                  }}
                  onClick={(event) => {
                    handleImgClicks(fisrtImgSrc, event)
                    onOpen?.call(null)
                  }}
                />
              </Box>
            </GridItem>
            {
              !!moreImages.length && (
                <GridItem>
                  <Grid row="2" gap={5}>
                    {moreImages.map((imgSrc, index) => (
                      <Box key={index}>
                        <Box h="290px" w="384px" overflow="hidden">
                          <Image
                            id="com-1-img-02"
                            src={imgSrc}
                            alt="img_02"
                            transition="0.3s"
                            _hover={{
                              transform: 'scale(1.1)',
                              cursor: 'pointer'
                            }}
                            onClick={(event) => {
                              handleImgClicks(imgSrc, event)
                              onOpen?.call(null)
                            }}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Grid>
                </GridItem>
              )
            }
            <GridItem>
              <Box maxWidth={'384px'} pt="10px">
                <TextContent />
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      )}
    />
  )
}

export default ComponentOne