import React from 'react'
import { Box, Flex, Text, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
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
                  <Link to="/">
                    <Button variant="ghost" colorScheme="teal">
                      Home
                    </Button>
                  </Link>
                  <Link to="/home">
                    <Button variant="ghost" colorScheme="teal">
                      Store
                    </Button>
                  </Link>
                  <Link to="/help">
                    <Button variant="ghost" colorScheme="teal">
                      Help
                    </Button>
                  </Link>
                </HStack>
              </Flex>
            </Box>
  )
}

export default MainNavbar
