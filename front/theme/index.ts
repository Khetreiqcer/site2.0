import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    global: (props: any) => ({
      body: {
        transition: "background-color 0.2s ease, color 0.2s ease",
        backgroundColor: props.colorMode === "light" ? "#faf8ef" : "#1a1a1a",
        color: props.colorMode === "light" ? "#333333" : "#f0f0f0",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        fontFamily: "Inter, sans-serif",
      },
    }),
  },
  colors: {
    primary: {
      100: "#E5E5E5",
      200: "#333333",
      300: "#0f0f0f",
      light: {
        100: "#faf8ef",
        200: "#e8e8e8",
      },
      dark: {
        100: "#1a1a1a",
        200: "#0a0a0a",
      },
    },
  },
  components: {
    Button: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      baseStyle: (props: any) => ({
        transition: "background-color 0.2s ease",
        bg: props.colorMode === "light" ? "#e8e8e8" : "#333333",
        color: props.colorMode === "light" ? "#000" : "#fff",
        _hover: {
          bg: props.colorMode === "light" ? "#d8d8d8" : "#444444",
        },
      }),
    },
  },
});

export default theme;
