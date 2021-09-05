import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { DarkModeSwitch } from "./DarkModeSwitch";

const Header = () => {
  return (
    <Flex
      px="5"
      py="5"
      justifyContent="space-between"
      width="100%"
      alignItems="center"
      maxW="80vw"
    >
      <Box>
        <Text fontWeight="semibold">Home</Text>
      </Box>
      <Flex alignItems="center">
        <IconButton
          colorScheme="blackAlpha"
          icon={<FaGithub />}
          size="lg"
          mr={5}
          variant="link"
        >
          GitHub
        </IconButton>
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};

export default Header;
