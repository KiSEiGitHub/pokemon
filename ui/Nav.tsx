import {
  Box,
  Button,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function Nav({ Lugia, HoHo }: any) {
  console.log(Lugia);
  console.log(HoHo);

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box zIndex={2}>
      <Button
        onClick={toggleColorMode}
        borderRadius="full"
        h="40px"
        w="40px"
        colorScheme={useColorModeValue("purple", "orange")}
      >
        <Image
          alt="ok"
          pos="absolute"
          src={colorMode === "light" ? Lugia : HoHo}
        />
      </Button>
    </Box>
  );
}

export default Nav;
