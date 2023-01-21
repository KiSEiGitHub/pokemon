import { Box, useColorModeValue } from "@chakra-ui/react";

function SmallCards({ children }: any) {
   return (
      <Box
         // eslint-disable-next-line react-hooks/rules-of-hooks
         bg={useColorModeValue("light.primary", "dark.primary")}
         borderRadius="full"
         py={2}
         mt={2}
         mx="auto"
      >
         {children}
      </Box>
   );
}

export default SmallCards;
