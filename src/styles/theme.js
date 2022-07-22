import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config });

export const myNewTheme = extendTheme({
  colors: {
    primary: "#dc3f34",
    primaryDark: "#dc3f34",
    secondary: "#084c61",
  },
});
