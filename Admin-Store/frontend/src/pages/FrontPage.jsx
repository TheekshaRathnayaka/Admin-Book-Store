import React from "react";
import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <Box
      height="100vh"
      backgroundImage="url('/src/front.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      filter="blur(2px)"
    >
    <Box
        height="100vh"
        position="relative"
        backgroundColor="rgba(0, 0, 0, 0.6)"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
    >
    <Container maxW="container.md" textAlign="center">
      <VStack spacing={6}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          Welcome to the Admin Book Store 📚
        </Text>
        <Text fontSize="lg" color="gray.200">
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
    </Box>
  );
};

export default FrontPage;
