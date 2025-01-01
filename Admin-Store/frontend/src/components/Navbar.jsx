import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.300", "gray.600");
  const color = useColorModeValue("gray.800", "white");
  
  return (
    <Container maxW={"1140px"} px={4} 
               position='fixed'
               top={0}
               left={0}
               right={0}
               zIndex={10}
               bg={bg}
               color={color}
               boxShadow='lg'>

      <Flex h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{base:"column", sm:"row"}} >

        <Text fontSize={{base:"22", sm:"28"}}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              textAlign={"center"}
              bgGradient={"linear(to-r, cyan.400, blue.500)"}
              bgClip={"text"}>

          <Link to={"/"}>
            Book Store 📚
          </Link>

        </Text>

        <HStack spacing={2} alignItems={"center"}>

          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light"? <IoMoon />: <LuSun size='20' />}
          </Button>

        </HStack>

      </Flex>

    </Container>
  );
};

export default Navbar
