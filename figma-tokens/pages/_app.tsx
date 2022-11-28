import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { chakraTheme } from "../themes/chakra";

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
