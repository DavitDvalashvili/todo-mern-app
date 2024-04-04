import { Box } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useAppSelector, useAppDispatch } from "../App/hook";
import { InitialTheme } from "../types";
import { useWindowSize } from "@uidotdev/usehooks";
import TodoContainer from "./TodoContainer";
import { addTodo, updateTodo, UpdateMode } from "../feature/todoSlice";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const windowWidth = useWindowSize().width;

  const [todoText, setTodoText] = useState("");

  // Redux selectors
  const theme: InitialTheme = useAppSelector((state) => state.theme);
  const { updateMode, updateTargetTodo } = useAppSelector(
    (state) => state.todo
  );

  const darkMode = theme.darkMode;
  const dispatch = useAppDispatch();

  const handleError = (message: string | undefined) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 1000,
    });
  };

  const handleAddTodo = () => {
    if (updateMode) {
      updateTodoFunction();
      dispatch(UpdateMode());
      return;
    } else {
      addNewTodo();
    }
  };

  const addNewTodo = () => {
    if (todoText.trim() == "") {
      handleError("Fill the field to dd new todo");
      return;
    } else {
      const newTodo = { todo: todoText };
      dispatch(addTodo(newTodo));
      setTodoText(" ");
    }
  };

  const updateTodoFunction = () => {
    const updatedTodo = { ...updateTargetTodo, todo: todoText };
    dispatch(updateTodo(updatedTodo));
    setTodoText("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (updateMode) {
        updateTodoFunction();
        dispatch(UpdateMode());
        return;
      } else {
        addNewTodo();
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  useEffect(() => {
    if (updateMode) {
      setTodoText(updateTargetTodo.todo);
    }
  }, [updateMode, updateTargetTodo]);

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
          onClick={handleAddTodo}
          sx={{
            width: {
              xs: "20px",
              lg: "22px",
            },
            height: {
              xs: "20px",
              lg: "22px",
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
                xs: "16px",
                lg: "18px",
              },
              height: {
                xs: "16px",
                lg: "18px",
              },
            }}
          />
        </Box>

        <input
          type="text"
          style={{
            width: "100%",
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
          onKeyDown={handleKeyDown}
        />
      </Box>
      <ToastContainer />
      <TodoContainer />
    </>
  );
};

export default Main;
