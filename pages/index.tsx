import { Box, Button, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cards from "../ui/Cards";
import Pokemon from "../ui/pokemon";

function Home() {
   const [pokemon, setPokemon] = useState<Array<any>>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [isLoadingBase, setIsLoadingBase] = useState<boolean>(true);
   const [pokemonBase, setPokemonBase] = useState<number>(1);
   const [url, setUrl] = useState<string>(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
   );

   const getPokemonBase = async () => {
      if (isLoadingBase) {
         const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonBase}`
         );
         const data = await res.json();
         setPokemonBase(data);
      }
      setIsLoadingBase(false);
   };

   const getPokemon = async () => {
      const res = await fetch(url);
      const { results, next } = await res.json();
      setUrl(next);
      results.forEach(async (p: any) => {
         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${p.name}`);
         const data = await res.json();
         setPokemon((curr: any) => [...curr, data]);
      });
      setIsLoading(false);
   };

   useEffect(() => {
      setIsLoadingBase(true);
      getPokemonBase();
      if (isLoading) {
         getPokemon();
      }
   }, [pokemonBase]);

   console.log(pokemon);

   return (
      <Container maxW="100%">
         <Grid templateColumns="1fr 0.5fr" pos="relative">
            <GridItem colStart={1}>
               <Flex flexWrap="wrap" gap={10} justifyContent="center" mt={10}>
                  {pokemon.map((item: any, key: number) => (
                     <Box key={key} onClick={() => setPokemonBase(item.id)}>
                        <Cards
                           name={item.name}
                           id={item.id}
                           img={item.sprites["front_default"]}
                           type={item.types}
                        />
                     </Box>
                  ))}
               </Flex>
               <Button
                  mt={5}
                  mx="auto"
                  display="block"
                  onClick={() => getPokemon()}
               >
                  Load more
               </Button>
            </GridItem>
            <GridItem colStart={2} pos="sticky" h="500px" top={10}>
               {!isLoadingBase && <Pokemon pokemon={pokemonBase} />}
            </GridItem>
         </Grid>
      </Container>
   );
}

export default Home;
