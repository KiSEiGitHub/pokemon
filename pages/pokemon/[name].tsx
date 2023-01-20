import { Heading, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

function onePoke({ pokemon }: any) {
   return (
      <>
         <Heading>{pokemon.name}</Heading>
         <Image
            src={pokemon.sprites["other"]["dream_world"]["front_default"]}
            alt={pokemon.name}
         />
      </>
   );
}

export default onePoke;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const { name } = ctx.query;
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
   const data = await res.json();
   return {
      props: {
         pokemon: data,
      },
   };
};
