import {
  Box,
  useColorModeValue,
  Image,
  Heading,
  Text,
  Flex,
  Tag,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { bgCards } from "./Cards";
import SmallCards from "./smallCards";
import { StatCards } from "./statCards";

function Pokemon({ pokemon }: any) {
  const { data, species } = pokemon;
  const tab = [
    { slug: "HP", color: "#df2140" },
    { slug: "ATK", color: "#ff994d" },
    { slug: "DEF", color: "#ffdc41" },
    { slug: "SpA", color: "#85ddff" },
    { slug: "SpD", color: "#a8ef95" },
    { slug: "SPD", color: "#fb94a8" },
    { slug: "TOT", color: "#7195dc" },
  ];

  // data.stats.push({
  //    base_stat: 45,
  //    effort: 0,
  //    stat: {
  //       name: "TOT",
  //       url: "ma teub",
  //    },
  // });

  data.stats.forEach((item: any, key: number) => {
    item.slug = tab[key].slug;
    item.color = tab[key].color;
  });

  return (
    <Box
      maxW="100%"
      pos="relative"
      borderRadius="35px"
      pb={10}
      h='full'
      boxShadow="lg"
      bg={useColorModeValue("light.secondary", "dark.secondary")}
    >
      <Image
        src={data.sprites["other"]["home"]["front_default"]}
        alt={data.name}
        pos="absolute"
        left="50%"
        transform="translateX(-50%)"
        top="-150px"
        w="250px"
      />
      <Box pt={120} maxW="500px" mx="auto">
        <Text variant="id" textAlign="center">
          #{data.id}
        </Text>
        <Heading textAlign="center" mt={3}>
          {data.name}
        </Heading>
        <Flex justifyContent="center" mt={3} gap={3}>
          {data.types.map((item: any, key: number) => (
            <Tag key={key} px={5} py={2} colorScheme={bgCards(item.type.name)}>
              {item.type.name}
            </Tag>
          ))}
        </Flex>
        <Heading textAlign="center" mt={3} variant="sectionTitle">
          POKÉDEX ENTRY
        </Heading>
        <Text mt={3}>{species["flavor_text_entries"][0]["flavor_text"]}</Text>

        <Box mt={3}>
          <Heading variant="sectionTitle" textAlign="center">
            Abilities
          </Heading>
          <Box mt={3}>
            <HStack spacing={3} justifyContent="center">
              {data.moves.slice(0, 2).map((item: any, key: number) => (
                <Box
                  px={5}
                  py={2}
                  border="1px solid red"
                  borderRadius="full"
                  key={key}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={useColorModeValue("light.primary", "dark.primary")}
                >
                  <Text>{item.move.name}</Text>
                </Box>
              ))}
            </HStack>
          </Box>
          <Grid
            templateColumns="repeat(2, 1fr)"
            textAlign="center"
            gap={5}
            mt={5}
          >
            <GridItem colStart={1}>
              <Heading variant="sectionTitle">height</Heading>
              <SmallCards>
                <Text>{data.height}m</Text>
              </SmallCards>
            </GridItem>
            <GridItem colStart={2}>
              <Heading variant="sectionTitle">weight</Heading>
              <SmallCards>
                <Text>{data.weight}kg</Text>
              </SmallCards>
            </GridItem>
          </Grid>
          <Box mt={5}>
            <Heading variant="sectionTitle" textAlign="center">
              stats
            </Heading>
            <HStack mt={3} justifyContent="space-between">
              {data.stats.map((item: any, key: number) => (
                <Box key={key}>
                  <StatCards
                    name={item.slug}
                    value={item["base_stat"]}
                    color={item.color}
                  />
                </Box>
              ))}
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Pokemon;
