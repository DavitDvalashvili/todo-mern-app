import Layout from "./components/Layout";
import { CssBaseline, GlobalStyles } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*": {
            boxSizing: "border-box",
            padding: "0px",
            margin: "0px",
          },
        }}
      />
      <Layout />
    </>
  );
}

export default App;
