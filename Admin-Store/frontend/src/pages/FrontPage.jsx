import React from "react";
import { Box, Button, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (

    <Box position="relative" height="100vh" width="100vw" overflow="hidden">
      <Box
        position="fixed"
        top="0"
        left="20"
        right="20"
        zIndex="10"
        bg="rgba(0, 0, 0, 0)"
        color="white"
        px={8}
        py={4}
        boxShadow="md"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl"
                fontWeight="bold"
                bgGradient="linear(to-r, cyan.400, blue.500)"
                bgClip="text">
            BookShelf 📖
          </Text>
          <HStack spacing={6} >
            <Link to="/home">
              <Button variant="ghost" colorScheme="teal">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" colorScheme="teal">
                About
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" colorScheme="teal">
                Contact
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Box>
    <Container
        maxW="auto"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
    >
      <VStack spacing={6}>
        <Text
          fontSize="8xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          BookShelf 📖
        </Text>
        <Text
          fontSize="5xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          Welcome to the Admin Book Store 📚
        </Text>
        <Text fontSize="lg" color="blue.300">
          Manage your collection of books with ease. Add, update, or delete books seamlessly.
        </Text>
        <Link to="/home">
        <Button
          size="lg"
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, blue.500)"
          _hover={{ bgGradient: "linear(to-r, blue.500, teal.400)" }}
        >
          Enter the Store
        </Button>
        </Link>
      </VStack>
      </Container>
    </Box>
  );
};

export default FrontPage;
