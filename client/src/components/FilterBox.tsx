import { Box } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";
import { useAppSelector } from "../App/hook";
import { InitialTheme } from "../types";

const FilterBox = () => {
  // Redux selectors
  // Redux selectors
  const theme: InitialTheme = useAppSelector((state) => state.theme);
  const darkMode = theme.darkMode;

  return (
    <Box
      borderRadius="5px"
      sx={{
        backgroundColor: darkMode
          ? darkTheme.palette.primary.main
          : lightTheme.palette.primary.main,
        color: darkMode
          ? lightTheme.palette.primary.secondTextColor
          : lightTheme.palette.primary.secondTextColor,
        boxShadow: darkMode
          ? "0px 35px 50px -15px rgba(0, 0, 0, 0.50)"
          : "0px 35px 50px -15px rgba(194, 195, 214, 0.50)",
        pt: {
          xs: "15px",
          lg: "0px",
        },
        pb: {
          xs: "19px",
          lg: "0px",
        },
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="19px"
      fontSize="14px"
      fontWeight="700"
      lineHeight="14px"
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
        All
      </Box>
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
        Active
      </Box>
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
        Completed
      </Box>
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
        Newest
      </Box>
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
        Oldest
      </Box>
    </Box>
  );
};

export default FilterBox;
