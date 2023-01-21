import {
   Box,
   Center,
   useColorModeValue,
   Text,
   Heading,
} from "@chakra-ui/react";

interface props {
   name: string;
   value: string | number;
   color: string;
}

export const StatCards = ({ name, value, color }: any) => (
   <Box
      w="50px"
      h="90px"
      bg={useColorModeValue("light.primary", "dark.primary")}
      borderRadius="full"
      px={2}
      pos="relative"
      boxShadow="md"
   >
      <Center
         mx="auto"
         pos="relative"
         top={3}
         w="35px"
         h="35px"
         borderRadius="full"
         bg={color}
      >
         <Text color="#fff">{name}</Text>
      </Center>
      <Heading
         fontSize="1em"
         pos="absolute"
         bottom="1em"
         left="50%"
         transform="translateX(-50%)"
      >
         {value}
      </Heading>
   </Box>
);
