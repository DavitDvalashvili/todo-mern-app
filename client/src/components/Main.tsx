import { Box } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import {
  useAppSelector,
  //useAppDispatch
} from "../App/hook";
import { InitialTheme } from "../types";
import { useWindowSize } from "@uidotdev/usehooks";
import TodoContainer from "./TodoContainer";
//import { addTodo } from "../feature/todoSlice";
import { useState } from "react";

const Main = () => {
  const windowWidth = useWindowSize().width;

  const [todoText, setTodoText] = useState("");

  // Redux selectors
  const theme: InitialTheme = useAppSelector((state) => state.theme);
  const darkMode = theme.darkMode;
  //const dispatch = useAppDispatch();

  // const handleAddTodo = () => {
  //   if (todoText.trim() !== "") {
  //     dispatch(addTodo(todoText.trim()));
  //     setTodoText("");
  //   }
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <>
      <Box
        width="100%"
        maxWidth="540px"
        display="flex"
        justifyContent="left"
        alignItems="center"
        mx="auto"
        borderRadius="5px"
        bgcolor={
          darkMode
            ? darkTheme.palette.primary.main
            : lightTheme.palette.primary.main
        }
        sx={{
          gap: {
            xs: "12px",
            lg: "24px",
          },
          px: {
            xs: "20px",
            lg: "24px",
          },
          py: {
            xs: "14px",
            lg: "20px",
          },
          mt: {
            xs: "40px",
            lg: "48px",
          },
          mb: {
            xs: "14px",
            lg: "24px",
          },
          boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.50)",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          //onClick={handleAddTodo}
          sx={{
            width: {
              xs: "22px",
              lg: "24px",
            },
            height: {
              xs: "22px",
              lg: "24px",
            },
            cursor: "pointer",
            transition: "all 2s ease",
            backgroundColor: darkMode
              ? darkTheme.palette.primary.borderColor
              : lightTheme.palette.primary.borderColor,
            "&:hover": {
              backgroundImage:
                "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)",
            },
          }}
        >
          <AddOutlinedIcon
            sx={{
              bgcolor: darkMode
                ? darkTheme.palette.primary.main
                : lightTheme.palette.primary.main,
              color: darkMode
                ? darkTheme.palette.primary.secondTextColor
                : lightTheme.palette.primary.secondTextColor,
              borderRadius: "50%",
              width: {
                xs: "20px",
                lg: "22px",
              },
              height: {
                xs: "20px",
                lg: "22px",
              },
            }}
          />
        </Box>

        <input
          type="text"
          style={{
            border: "none",
            outline: "none",
            color: darkMode
              ? darkTheme.palette.primary.mainTextColor
              : lightTheme.palette.primary.mainTextColor,
            backgroundColor: darkMode
              ? darkTheme.palette.primary.main
              : lightTheme.palette.primary.main,
            fontSize: windowWidth && windowWidth < 1440 ? "14px" : "18px",
            fontWeight: lightTheme.typography.fontWeightRegular,
          }}
          placeholder="Create a new todo…"
          value={todoText}
          onChange={handleInputChange}
        />
      </Box>
      <TodoContainer />
    </>
  );
};

export default Main;
