import { Box } from "@mui/material";
import iconMoon from "../assets/icon-moon.svg";
import todoMobile from "../assets/TODO-mobile.svg";
import todoDesktop from "../assets/TODO-desktop.svg";
import { useWindowSize } from "@uidotdev/usehooks";

const Header = () => {
  const windowWidth = useWindowSize().width;

  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <img
        src={windowWidth && windowWidth < 1440 ? todoMobile : todoDesktop}
        alt="todoLogo"
      />
      <img
        src={iconMoon}
        height={windowWidth && windowWidth < 1440 ? "20px" : "26px"}
        alt="icon"
      />
    </Box>
  );
};

export default Header;
