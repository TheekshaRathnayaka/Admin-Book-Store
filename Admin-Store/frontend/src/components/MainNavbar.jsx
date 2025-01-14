import React from 'react'
import { Box, Flex, Text, HStack, Button, useDisclosure, IconButton, Collapse, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const MainNavbar = () => {

  const { isOpen, onToggle } = useDisclosure();

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
                <HStack as="nav" spacing={6} display={{base:'none', md:'flex'}}>
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

                <IconButton 
                  aria-label='Open Menu'
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  display={{ base:'flex', md:'none' }}
                  onClick={onToggle}
                  variant='ghost'
                  colorScheme='teal'
                />
              </Flex>

      <Collapse in={isOpen} animateOpacity>
        <VStack as='nav'
                spacing={4}
                mt={4}
                align='start'
                display={{ md:'none' }}>
          <Link to="/" onClick={onToggle}>
            <Button variant="ghost" colorScheme="teal" w='100%'>
              Home
            </Button>
          </Link>
          <Link to="/home" onClick={onToggle}>
            <Button variant="ghost" colorScheme="teal" w="100%">
              Store
            </Button>
          </Link>
          <Link to="/help" onClick={onToggle}>
            <Button variant="ghost" colorScheme="teal" w="100%">
              Help
            </Button>
          </Link>
        </VStack>
      </Collapse>
    </Box>
  )
}

export default MainNavbar
