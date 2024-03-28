import { Box } from "@mui/material";
import bgMobileLight from "../assets/bg-mobile-light.jpg";
import Header from "./Header";

const Layout = () => {
  return (
    <Box
      width="100vw"
      height="100%"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
      padding="48px 24px 72px 24px"
      sx={{
        backgroundImage: `url(${bgMobileLight})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 200px",
      }}
    >
      <Header />
      <div
        style={{
          width: "100px",
          height: "100px",
        }}
      ></div>
    </Box>
  );
};

export default Layout;
