import { Box } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";
import { useAppSelector } from "../App/hook";
import { InitialTheme } from "../types";
import FilterBox from "./FilterBox";
import { useWindowSize } from "@uidotdev/usehooks";
import TodoBox from "./TodoBox";

const TodoContainer = () => {
  const windowWidth = useWindowSize().width;

  // Redux selectors
  const theme: InitialTheme = useAppSelector((state) => state.theme);
  const darkMode = theme.darkMode;

  return (
    <Box maxWidth="540px" width="100%" marginX="auto">
      <Box
        borderRadius="5px"
        sx={{
          backgroundColor: darkMode
            ? darkTheme.palette.primary.main
            : lightTheme.palette.primary.main,
          mb: {
            xs: "16px",
            lg: "0px",
          },
        }}
      >
        <TodoBox />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt="16px"
          sx={{
            fontSize: {
              xs: "12px",
              lg: "14px",
            },
            lineHeight: {
              xs: "12px",
              lg: "14px",
            },
            color: darkMode
              ? lightTheme.palette.primary.secondTextColor
              : lightTheme.palette.primary.secondTextColor,
            fontWeight: "400",
            boxShadow: darkMode
              ? "0px 35px 50px -15px rgba(0, 0, 0, 0.50)"
              : "0px 35px 50px -15px rgba(194, 195, 214, 0.50)",
            px: {
              xs: "20px",
              lg: "24px",
            },
            pb: {
              xs: "22px",
              lg: "20px",
            },
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: darkMode
                  ? darkTheme.palette.primary.hoverColor
                  : lightTheme.palette.primary.hoverColor,
              },
            }}
          >
            5 items left
          </Box>
          {windowWidth && windowWidth >= 1440 && <FilterBox />}
          <Box
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: darkMode
                  ? darkTheme.palette.primary.hoverColor
                  : lightTheme.palette.primary.hoverColor,
              },
            }}
          >
            Clear Completed
          </Box>
        </Box>
      </Box>
      {windowWidth && windowWidth < 1440 && <FilterBox />}
    </Box>
  );
};

export default TodoContainer;
