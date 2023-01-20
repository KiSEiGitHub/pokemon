import { Box, Button, useColorMode } from "@chakra-ui/react";
import React from "react";

function Nav() {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Box>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  );
}

export default Nav;
