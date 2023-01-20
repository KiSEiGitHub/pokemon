import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const colors = {
   dark: {
      primary: "#181818",
      secondary: "#202020",
      text: {
         primary: "#dcdcdc",
         secondary: "#5d5d5d",
         black: "#000",
      },
   },
   light: {
      primary: "#f6f8fc",
      secondary: "#fff",
      text: {
         primary: "#10222f",
         secondary: "#8f9396",
         black: "#000",
      },
   },
};

export const theme = extendTheme({
   colors,
   styles: {
      global: (props: any) => ({
         body: {
            bg: mode(colors.light.primary, colors.dark.primary)(props),
         },
      }),
   },

   config: {
      initialColorMode: "light",
      useSystemColorMode: true,
      disableTransitionOnChange: false,
   },

   components: {
      Heading: {
         baseStyle: (props: any) => ({
            color: mode(
               colors.light.text.primary,
               colors.dark.text.primary
            )(props),
         }),
      },
      Text: {
         variants: {
            id: (props: any) => ({
               color: mode(
                  colors.light.text.secondary,
                  colors.dark.text.secondary
               )(props),
               fontWeight: 700,
            }),
         },
      },
   },
});
