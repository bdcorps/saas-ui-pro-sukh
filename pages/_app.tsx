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
        500: "#5000ff",
        600: "#783aff",
        700: "#5001ff",
        800: "#4500db",
        900: "#3300a3",
      },
    },
    fonts: {
      heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
    },

    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
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
