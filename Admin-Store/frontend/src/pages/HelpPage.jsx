import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import MainNavbar from '../components/MainNavbar'

const HelpPage = () => {
  return (
    <Box bg="gray.50" minHeight="100vh" py={20} px={5}>
      <MainNavbar />
      <Container maxW="container.lg">
        <VStack spacing={6} mb={10} textAlign="center">
           <Heading fontSize="5xl"
                    bgGradient="linear(to-r, cyan.400, blue.500)"
                    bgClip="text">
              Help & Support
           </Heading>
        </VStack>
      </Container>
    </Box>
  )
}

export default HelpPage
