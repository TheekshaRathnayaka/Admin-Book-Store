import { Box, Container, Heading, VStack, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button } from '@chakra-ui/react'
import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { Link } from 'react-router-dom'

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
              <AccordionButton fontSize="lg" fontWeight="bold" p={5} _expanded={{ bg: "blue.50" }}>
                <Box flex="1" textAlign="left">
                  How do I add a new book to the store?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              To add a new book, go to the "Store" section and click on the "+ icon" button. Fill out the form with the book's details, then click "Add Book".
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I edit book details?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Locate the book in the "Store" section, click on the "Edit icon" button, change the necessary details, and "Update" your changes.            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I delete a book from the store?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Find the book you want to remove in the "Store" section, then click the "Delete" button.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <VStack spacing={4} mt={10} textAlign="center">
          <Heading size="md" color="blue.600">
            Need Further Assistance?
          </Heading>
          <Text fontSize="md" color="gray.600">
            If you couldn't find the answer to your question, feel free to reach out to us.
          </Text>
          <Link href="mailto:support@bookshelf.com" color="teal.500" fontSize="lg">
            support@bookshelf.com
          </Link>
          <Button size="lg"
                  colorScheme='teal'
                  bgGradient="linear(to-r, teal.400, blue.500)"
                  _hover={{ bgGradient: "linear(to-r, blue.500, teal.400)" }}>
            Contact Support
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default HelpPage;
