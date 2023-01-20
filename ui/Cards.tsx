import {
   Box,
   Center,
   Heading,
   Image,
   Link,
   Tag,
   Text,
   useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface pokemon {
   name: string;
   img: string;
   type: Array<object>;
   id: number;
}

export const bgCards = (type: string) => {
   switch (type) {
      case "fire":
         return "red";
      case "water":
         return "blue";
      case "ice":
         return "teal";
      case "grass":
         return "green";
      case "bug":
         return "green";
      case "flying":
      case "normal":
      case "steel":
         return "grey";
      case "electric":
         return "yellow";
      case "dark":
      case "poison":
      case "ghost":
      case "psychic":
         return "purple";
      case "rock":
      case "fighting":
      case "ground":
         return "orange";
      case "fairy":
      case "dragon":
         return "pink";
   }
};

function Cards({ name, img, id, type }: pokemon) {
   return (
      <Box
         w="320px"
         h="250px"
         borderRadius="40px"
         boxShadow="lg"
         bg={useColorModeValue("light.secondary", "dark.secondary")}
         pos="relative"
      >
         <Image
            src={img}
            alt={name}
            mx="auto"
            w="150px"
            pt={4}
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
            top="-90px"
         />
         <Center w="100%" h="full" flexDirection="column" gap={5}>
            <Box>
               <Text variant="id">#{id}</Text>
            </Box>
            <Box>
               <Heading>{name}</Heading>
            </Box>
            <Box>
               {type.map((item: any, key: number) => (
                  <Tag
                     key={key}
                     px={5}
                     py={2}
                     mx="5px"
                     colorScheme={bgCards(item.type.name)}
                  >
                     {item.type.name}
                  </Tag>
               ))}
            </Box>
         </Center>
      </Box>
   );
}

export default Cards;
