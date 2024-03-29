import { Box } from "@mui/material";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import todoMobile from "../assets/TODO-mobile.svg";
import todoDesktop from "../assets/TODO-desktop.svg";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAppDispatch, useAppSelector } from "../App/hook";
import { changeTheme } from "../feature/themeSlice";
import { InitialTheme } from "../types";

const Header = () => {
  const windowWidth = useWindowSize().width;

  // Redux dispatcher
  const dispatch = useAppDispatch();

  // Redux selectors
  const theme: InitialTheme = useAppSelector((state) => state.theme);
  const darkMode = theme.darkMode;

  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      bgcolor="unset"
    >
      <img
        src={windowWidth && windowWidth < 1440 ? todoMobile : todoDesktop}
        alt="todoLogo"
        style={{ backgroundColor: "unset" }}
      />
      <img
        style={{ backgroundColor: "unset" }}
        onClick={() => {
          dispatch(changeTheme());
        }}
        src={darkMode ? iconMoon : iconSun}
        height={windowWidth && windowWidth < 1440 ? "20px" : "26px"}
        alt="icon"
      />
    </Box>
  );
};

export default Header;