import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    backgroundColor?: string;
    mainTextColor?: string;
    secondTextColor?: string;
    activeTextColor?: string;
    borderColor?: string;
    hoverColor?: string;
  }

  interface SimplePaletteColorOptions {
    backgroundColor?: string;
    mainTextColor?: string;
    secondTextColor?: string;
    activeTextColor?: string;
    borderColor?: string;
    hoverColor?: string;
  }
}

//Export the augmented module
export { createTheme };
