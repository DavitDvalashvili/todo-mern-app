import Layout from "./components/Layout";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { useAppSelector } from "./App/hook";
import { InitialTheme } from "./types";

function App() {
  // Redux selectors
  // Selecting the theme from Redux state
  const theme: InitialTheme = useAppSelector((state) => state.theme);
  // Extracting darkMode value from theme
  const darkMode = theme.darkMode;

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*": {
            boxSizing: "border-box",
            padding: "0px",
            margin: "0px",
          },
          body: {
            scrollbarWidth: "none",
            backgroundColor: darkMode
              ? darkTheme.palette.primary.backgroundColor
              : lightTheme.palette.primary.backgroundColor,
          },
          "body::-webkit-scrollbar": {
            display: "none",
          },
          "html::-webkit-scrollbar": {
            display: "none",
          },
        }}
      />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
