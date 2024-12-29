import React from "react";
import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <Box
      height="100vh"
      backgroundImage="url('https://www.freepik.com/free-photo/front-view-books-with-glasses_5207434.htm#fromView=search&page=1&position=40&uuid=8a94b0fb-7fe0-4847-ab77-35a1c3e08460&new_detail=true')"
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
      </VStack>
    </Container>
    </Box>
    </Box>
  );
};

export default FrontPage;
