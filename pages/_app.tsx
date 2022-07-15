import { extendTheme } from "@chakra-ui/react";
// 1. Import the pro theme
import { theme as proTheme } from "@saas-ui/pro";
import { SaasProvider } from "@saas-ui/react";
import type { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";

// 2. Extend your theme
const theme = extendTheme(
  {
    components: {
      Page: {
        baseStyle: {
          description: {},
        },
      },
    },
    styles: {
      global: { "html, body, #root": { height: "100%" } },
    },
    colors: {
      primary: {
        50: "#f9f6ff",
        100: "#e6dbff",
        200: "#d0bbff",
        300: "#b593ff",
        400: "#a57cff",
        500: "#8e5bff",
        600: "#783aff",
        700: "#5001ff",
        800: "#4500db",
        900: "#3300a3",
      },
    },
  },
  proTheme
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SaasProvider theme={theme}>
      <Component {...pageProps} />
    </SaasProvider>
  );
}

export default MyApp;
