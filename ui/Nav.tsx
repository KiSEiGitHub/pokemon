import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function Nav() {
   const { colorMode, toggleColorMode } = useColorMode();
   return (
      <Box pos="fixed" right={10} top={10} zIndex={2}>
         <Button
            onClick={toggleColorMode}
            colorScheme={useColorModeValue("purple", "orange")}
         >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
         </Button>
      </Box>
   );
}

export default Nav;
