import {
   Box,
   useColorModeValue,
   Image,
   Heading,
   Text,
   Flex,
   Tag,
} from "@chakra-ui/react";
import { bgCards } from "./Cards";

function Pokemon({ pokemon }: any) {
   const { data, species } = pokemon;

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
            src={data.sprites["other"]["dream_world"]["front_default"]}
            alt={data.name}
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
            top="-120px"
            w="190px"
         />
         <Box pt={120}>
            <Text variant="id" textAlign="center">
               #{data.id}
            </Text>
            <Heading textAlign="center" mt={3}>
               {data.name}
            </Heading>
            <Flex justifyContent="center" mt={3} gap={3}>
               {data.types.map((item: any, key: number) => (
                  <Tag
                     key={key}
                     px={5}
                     py={2}
                     colorScheme={bgCards(item.type.name)}
                  >
                     {item.type.name}
                  </Tag>
               ))}
            </Flex>
            <Heading size="md" textAlign="center" mt={3}>
               POKÉDEX ENTRY
            </Heading>
         </Box>
      </Box>
   );
}

export default Pokemon;
