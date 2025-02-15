import React from "react";
import { Box, Button, Container, Flex, HStack, Text, VStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

const FrontPage = () => {
  return (

    <Box position="relative" height="100vh" width="100vw" overflow="hidden" pt="80px">
      <MainNavbar />
    <Container
        maxW="container.xl"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={{ base: 4, md: 8 }}
    >
      <VStack spacing={{ base: 4, md: 6 }}>
        <Text
          fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          BookShelf 📖
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          Welcome to the Admin Book Store 📚
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="blue.400">
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
        <Box pt={4}>
          <Image src="/books.jpg"
                  alt="Book store"
                  boxSize={{ base: "200px", md: "300px", lg: "400px" }}
                  objectFit="contain"/>
        </Box>
      </VStack>
      </Container>
    </Box>
  );
};

export default FrontPage;
