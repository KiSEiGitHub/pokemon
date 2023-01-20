import { Box, useColorModeValue, Image, Heading, Text } from "@chakra-ui/react";

function Pokemon({ pokemon }: any) {
   return (
      <Box
         mt={50}
         maxW="100%"
         pos="relative"
         borderRadius="35px"
         h="100vh"
         boxShadow="lg"
         bg={useColorModeValue("light.secondary", "dark.secondary")}
      >
         <Image
            src={pokemon.sprites["other"]["dream_world"]["front_default"]}
            alt={pokemon.name}
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
            top="-80px"
            w="170px"
         />
         <Box pt={120}>
            <Text variant="id" textAlign="center">
               #{pokemon.id}
            </Text>
            <Heading textAlign="center" mt={2}>{pokemon.name}</Heading>
         </Box>
      </Box>
   );
}

export default Pokemon;
