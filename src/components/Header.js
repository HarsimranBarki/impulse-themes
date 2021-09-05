import { Button } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
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
        <Text>Home</Text>
      </Box>
      <Flex alignItems="center">
        <Button>GitHub</Button>
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};

export default Header;
