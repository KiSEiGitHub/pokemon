import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
   dark: {
      primary: "#181818",
      secondary: "#202020",
      text: {
         primary: "#dcdcdc",
         secondary: "#999999",
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
         variants: {
            sectionTitle: (props: any) => ({
               fontSize: "0.95em",
               textTransform: "uppercase",
               letterSpacing: "0.1em",
            }),
         },
      },
      Text: {
         baseStyle: (props: any) => ({
            fontWeight: 600,
            color: mode(
               colors.light.text.black,
               colors.dark.text.secondary
            )(props),
         }),
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
