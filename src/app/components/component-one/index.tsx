import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react"
import TextContent from "./text-content"

const ComponentOne = () => {
  return (
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
              src="/assets/component-01/Image-01.jpg"
              alt="img_01"
              transition="0.3s"
              _hover={{
                transform: 'scale(1.1)'
              }}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Grid row="2" gap={5}>
            <Box h="290px" w="384px" overflow="hidden">
              <Image 
                src="/assets/component-01/Image-02.jpg" 
                alt="img_02" 
                transition="0.3s"
                _hover={{
                  transform: 'scale(1.1)'
                }}
              />
            </Box>
            <Box h="290px" w="384px" overflow="hidden">
              <Image 
                src="/assets/component-01/Image-03.jpg" 
                alt="img_03" 
                transition="0.3s"
                _hover={{
                  transform: 'scale(1.1)'
                }}
              />
            </Box>
          </Grid>
        </GridItem>
        <GridItem>
          <Box maxWidth={'384px'} pt="10px">
            <TextContent />
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default ComponentOne