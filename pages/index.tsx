import { Box, Button, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cards from "../ui/Cards";
import Pokemon from "../ui/pokemon";

function Home() {
   const [pokemon, setPokemon] = useState<Array<any>>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [pokemonBase, setPokemonBase] = useState<object>({});
   const [url, setUrl] = useState<string>(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=386"
   );

   const getPokemon = async () => {
      const res = await fetch(url);
      const { results, next } = await res.json();
      setUrl(next);

      // fetch base
      const resBase = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
      const dataBase = await resBase.json();
      const resBaseS = await fetch(
         "https://pokeapi.co/api/v2/pokemon-species/1/"
      );
      const dataBaseS = await resBaseS.json();
      setPokemonBase({ data: dataBase, species: dataBaseS });

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

   useEffect(() => {
      if (isLoading) {
         getPokemon();
      }
   }, [pokemonBase]);

   console.log(pokemonBase);

   return (
      <Container maxW="100%">
         <Grid templateColumns="1fr 0.5fr" pos="relative">
            <GridItem colStart={1}>
               <Flex flexWrap="wrap" gap={10} justifyContent="center" mt={10}>
                  {pokemon.map(({ data, species }: any, key: number) => (
                     <Box
                        key={key}
                        onClick={() =>
                           setPokemonBase({ data: data, species: species })
                        }
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
               <Button
                  mt={5}
                  mx="auto"
                  display="block"
                  onClick={() => getPokemon()}
               >
                  Load more
               </Button>
            </GridItem>
            <GridItem colStart={2} pos="sticky" h="500px" top={20}>
               {!isLoading && <Pokemon pokemon={pokemonBase} />}
            </GridItem>
         </Grid>
      </Container>
   );
}
export default Home;
