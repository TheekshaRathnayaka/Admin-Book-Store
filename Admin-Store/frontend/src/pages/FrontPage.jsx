import React from "react";
import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (

    <Box
      position="relative"
      height="100vh"
      width="100%"> 
    <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('/front.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        filter="blur(5px)"
        zIndex="-1"
    />
    <Container
        maxW="container.md"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
      >
      <VStack spacing={6}>
        <Text
          fontSize="5xl"
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
  );
};

export default FrontPage;
