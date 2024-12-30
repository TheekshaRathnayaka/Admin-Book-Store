import React from "react";
import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (

    <Box
      position="relative"
      height="100vh"
      width="100%"
      backgroundImage="url('/src/front.jpg')">
        
    <Box
        height="100vh"
        position="relative"
        backgroundColor="rgba(0, 0, 0, 0.6)"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
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
    </Box>
    </Box>
  );
};

export default FrontPage;
