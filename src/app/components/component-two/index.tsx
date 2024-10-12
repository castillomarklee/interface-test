import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import { Open_Sans } from '@next/font/google'
import STATIC_DATA from '../../static-data/data.json'
import ContentCard, { ContentCardProps } from './content-card'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '500', '400', '600', '700', '800'],
})

const ComponentTwo = () => {
  const { COMP_2_CONTENT } = STATIC_DATA

  return (
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
              id={content.id}
              imgSrc={content.imgSrc}
              title={content.title}
              description={content.description}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  )
}

export default ComponentTwo