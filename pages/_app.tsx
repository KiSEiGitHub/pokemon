import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../theme/theme";
import Nav from "../ui/Nav";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={theme}>
         <Nav />
         <Component {...pageProps} />
      </ChakraProvider>
   );
}
