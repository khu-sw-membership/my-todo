import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "blue.100",
      },
    },
  },
  fonts: {
    heading: "Noto Sans KR, sans-serif",
    body: "Noto Sans KR, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
