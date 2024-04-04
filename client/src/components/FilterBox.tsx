import { Box } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";
import { useAppSelector, useAppDispatch } from "../App/hook";
import { InitialTheme } from "../types";
import { filter, sort } from "../feature/todoSlice";
import { useState, useEffect } from "react";

const FilterBox = () => {
  // State for filter term and sort order
  const [filterTerm, setFilterTerm] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("desc");

  // Redux selector to get theme
  const theme: InitialTheme = useAppSelector((state) => state.theme);
  // Extracting darkMode value from theme
  const darkMode = theme.darkMode;

  // Redux dispatcher
  const dispatch = useAppDispatch();

  // useEffect to dispatch filter and sort actions when filterTerm or sortOrder changes
  useEffect(() => {
    dispatch(filter(filterTerm));
    dispatch(sort(sortOrder));
  }, [filterTerm, dispatch, sortOrder]);

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
          color:
            filterTerm == "All"
              ? lightTheme.palette.primary.activeTextColor
              : "",
        }}
        onClick={() => {
          setFilterTerm("All");
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
          color:
            filterTerm == "Active"
              ? lightTheme.palette.primary.activeTextColor
              : "",
        }}
        onClick={() => {
          setFilterTerm("Active");
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
          color:
            filterTerm == "Completed"
              ? lightTheme.palette.primary.activeTextColor
              : "",
        }}
        onClick={() => {
          setFilterTerm("Completed");
        }}
      >
        Completed
      </Box>
      {sortOrder == "asc" && (
        <Box
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: darkMode
                ? darkTheme.palette.primary.hoverColor
                : lightTheme.palette.primary.hoverColor,
            },
          }}
          onClick={() => {
            setSortOrder("desc");
          }}
        >
          Newest
        </Box>
      )}
      {sortOrder == "desc" && (
        <Box
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: darkMode
                ? darkTheme.palette.primary.hoverColor
                : lightTheme.palette.primary.hoverColor,
            },
          }}
          onClick={() => {
            setSortOrder("asc");
          }}
        >
          Oldest
        </Box>
      )}
    </Box>
  );
};

export default FilterBox;
