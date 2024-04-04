import { Box } from "@mui/material";
import bgMobileLight from "../assets/bg-mobile-light.jpg";
import bgMobileDark from "../assets/bg-mobile-dark.jpg";
import bgDesktopLight from "../assets/bg-desktop-light.jpg";
import bgDesktopDark from "../assets/bg-desktop-dark.jpg";
import Header from "./Header";
import { useAppSelector } from "../App/hook";
import { InitialTheme } from "../types";
import Main from "./Main";

const Layout = () => {
  // Redux selectors to get theme
  const theme: InitialTheme = useAppSelector((state) => state.theme);
  // Extracting darkMode value from theme
  const darkMode = theme.darkMode;

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: {
            xs: darkMode ? `url(${bgMobileLight})` : `url(${bgMobileDark})`,
            lg: darkMode ? `url(${bgDesktopLight})` : `url(${bgDesktopDark})`,
          },
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "100% 200px",
            lg: "100% 300px",
          },
          padding: {
            xs: "48px 24px 0px 24px",
            lg: "70px 24px 0px 24px",
          },
        }}
      >
        <Header />
        <Main />
      </Box>
    </Box>
  );
};

export default Layout;
