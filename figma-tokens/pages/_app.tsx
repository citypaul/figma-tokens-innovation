import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { chakraTheme } from "../themes/chakra";

// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

const { colors } = chakraTheme;

export const theme = extendTheme({
  colors,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
