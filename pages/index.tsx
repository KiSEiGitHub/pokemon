import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cards from "../ui/Cards";
import Nav from "../ui/Nav";
import Pokemon from "../ui/pokemon";

function Home() {
  const [lugia, setLugia] = useState<any>({});
  const [oh, setOh] = useState<any>({});
  const { handleSubmit, register } = useForm();
  const [From, setFrom] = useState<number>(0);
  const [Limit, setLimit] = useState<number>(25);
  const [pokemon, setPokemon] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemonBase, setPokemonBase] = useState<object>({});
  const [url, setUrl] = useState<string>(
    `https://pokeapi.co/api/v2/pokemon?limit=${Limit}&offset=${From}`
  );

  const getPokemon = async () => {
    const res = await fetch(url);
    const { results, next } = await res.json();
    setUrl(next);
    if (isLoading) {
      // set nav base
      const resNavL = await fetch("https://pokeapi.co/api/v2/pokemon/lugia");
      const dataResL = await resNavL.json();
      setLugia(dataResL);

      const resNavO = await fetch("https://pokeapi.co/api/v2/pokemon/250");
      const dataResO = await resNavO.json();
      setOh(dataResO);
      // fetch base
      const resBase = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
      const dataBase = await resBase.json();
      const resBaseS = await fetch(
        "https://pokeapi.co/api/v2/pokemon-species/1/"
      );
      const dataBaseS = await resBaseS.json();
      setPokemonBase({ data: dataBase, species: dataBaseS });
    }

    results.forEach(async (p: any) => {
      const resSpecies = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${p.name}`
      );
      const dataSpecies = await resSpecies.json();

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${p.name}`);
      const data = await res.json();
      setPokemon((curr: any) => [
        ...curr,
        { data: data, species: dataSpecies },
      ]);
    });

    setIsLoading(false);
  };

  const pokeForm = (data: any) => {
    const { From, Limit }: any = data;
    setFrom(From);
    setLimit(Limit);
    setIsLoading(true);
    setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${Limit}&offset=${From}`);
  };

  useEffect(() => {
      if (isLoading) {
      getPokemon();
    }
  }, [pokemonBase, url]);

  console.log(lugia);
  console.log(oh);

  return (
    <Container maxW="100%">
      <Grid
        templateColumns="0.7fr 0.5fr"
        templateRows="90px 1fr"
        templateAreas={`
                "nav poke"
                "item poke"
              `}
        pos="relative"
        pb={10}
        gap={10}
      >
        <GridItem
          area="nav"
          bg={useColorModeValue("light.secondary", "dark.secondary")}
          borderRadius="xl"
          mt={5}
          pos="sticky"
          boxShadow="lg"
          top={0}
          zIndex={5}
        >
          <HStack
            justifyContent="flex-end"
            h="full"
            alignItems="center"
            px={5}
          >
            {!isLoading && (
              <Nav
                Lugia={lugia.sprites["front_default"]}
                HoHo={oh.sprites["front_default"]}
              />
            )}
          </HStack>
        </GridItem>
        <GridItem area="item" my={5} zIndex={2} pos="relative">
          <Flex flexWrap="wrap" gap={10} justifyContent="space-between">
            {pokemon.map(({ data, species }: any, key: number) => (
              <Box
                key={key}
                cursor="pointer"
                _hover={{ transform: "scale(1.05)" }}
                transition="0.3s"
                onClick={() => setPokemonBase({ data: data, species: species })}
              >
                <Cards
                  name={data.name}
                  id={data.id}
                  img={data.sprites["front_default"]}
                  type={data.types}
                />
              </Box>
            ))}
          </Flex>
          <Button mt={5} mx="auto" display="block" onClick={() => getPokemon()}>
            Load more
          </Button>
        </GridItem>
        <GridItem area="poke" h="800px" pos="sticky" top="150px">
          {!isLoading && <Pokemon pokemon={pokemonBase} />}
        </GridItem>
      </Grid>
    </Container>
  );
}
export default Home;
