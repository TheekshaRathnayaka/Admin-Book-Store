import { Box, Container, Heading, VStack, Text, Accordion, AccordionItem, AccordionButton } from '@chakra-ui/react'
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
           <Text fontSize="2xl" color="gray.600">
            Find answers to common questions and learn how to manage your book store effectively.
           </Text>
        </VStack>
        <Heading size="lg" mb={6} color="blue.600">
          Frequently Asked Questions
        </Heading>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  )
}

export default HelpPage
