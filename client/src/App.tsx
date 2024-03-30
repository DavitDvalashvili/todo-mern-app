import Layout from "./components/Layout";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { useAppSelector } from "./App/hook";
import { InitialTheme } from "./types";

function App() {
  // Redux dispatcher

  // Redux selectors
  const theme: InitialTheme = useAppSelector((state) => state.theme);
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
            backgroundColor: darkMode
              ? darkTheme.palette.primary.backgroundColor
              : lightTheme.palette.primary.backgroundColor,
          },
        }}
      />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
