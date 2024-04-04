import { Box, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../App/hook";
import {
  fetchTodoData,
  updateTodo,
  UpdateMode,
  UpdateTargetTodo,
  deleteTodo,
} from "../feature/todoSlice";
import { useEffect } from "react";
import { TodoItem, InitialTheme } from "../types";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Tooltip from "@mui/material/Tooltip";
import TimeAgo from "./TimeAgo";
import { darkTheme, lightTheme } from "../theme";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const TodoBox = () => {
  // Redux selector
  const { todos, filterTerm, sortOrder, updateTargetTodo, updateMode } =
    useAppSelector((state) => state.todo);

  const dispatch = useAppDispatch();
  const theme: InitialTheme = useAppSelector((state) => state.theme);

  const darkMode = theme.darkMode;

  // Fetch todos when filter or sort order changes
  useEffect(() => {
    if (filterTerm && sortOrder) {
      dispatch(fetchTodoData({ filterTerm, sortOrder }));
    }
  }, [dispatch, filterTerm, sortOrder]);

  // Toggle todo status between active and completed
  const toggleTodoStatus = (initialTodo: TodoItem) => {
    const updatedTodo = { ...initialTodo, active: !initialTodo.active };
    dispatch(updateTodo(updatedTodo));
  };

  // Delete a todo
  const deleteTodoFunction = (deleteTargetTodo: TodoItem) => {
    dispatch(deleteTodo(deleteTargetTodo));
  };

  // Handle click on edit icon to update a todo
  const handleUpdateClick = (todoItem: TodoItem) => {
    if (!updateMode) {
      dispatch(UpdateTargetTodo(todoItem));
      dispatch(UpdateMode());
    }
  };

  return (
    <>
      {todos.map(
        (todoItem, index) =>
          index !== todos.indexOf(updateTargetTodo) && (
            <Box
              key={todoItem.id}
              display="flex"
              justifyContent="left"
              alignItems="center"
              borderBottom="1px solid"
              borderColor={
                darkMode
                  ? darkTheme.palette.primary.borderColor
                  : lightTheme.palette.primary.borderColor
              }
              sx={{
                p: {
                  xs: "16px 20px",
                  lg: "20px 24px",
                },
                gap: {
                  xs: "12px",
                  lg: "24px",
                },
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="50%"
                onClick={() => {
                  toggleTodoStatus(todoItem);
                }}
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
                  backgroundImage: !todoItem.active
                    ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
                    : "",
                }}
              >
                <CheckOutlinedIcon
                  sx={{
                    bgcolor: darkMode
                      ? darkTheme.palette.primary.main
                      : lightTheme.palette.primary.main,
                    backgroundImage: !todoItem.active
                      ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
                      : "",
                    color:
                      darkMode && todoItem.active
                        ? darkTheme.palette.primary.main
                        : lightTheme.palette.primary.main,
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
              <Typography
                sx={{
                  fontWeight: lightTheme.typography.fontWeightRegular,
                  fontSize: {
                    xs: "12px",
                    lg: "18px",
                  },
                  cursor: "pointer",
                  textDecoration: !todoItem.active ? "line-through" : "",
                  color:
                    todoItem.active && !darkMode
                      ? lightTheme.palette.primary.mainTextColor
                      : !todoItem.active && !darkMode
                      ? lightTheme.palette.primary.secondTextColor
                      : todoItem.active && darkMode
                      ? darkTheme.palette.primary.mainTextColor
                      : !todoItem.active && darkMode
                      ? darkTheme.palette.primary.secondTextColor
                      : "",
                }}
              >
                {todoItem.todo}
              </Typography>
              <Tooltip
                title={<TimeAgo timestamp={todoItem.updatedAt} timeAgo="" />}
                placement="top"
              >
                <EditOutlinedIcon
                  onClick={() => {
                    handleUpdateClick(todoItem);
                  }}
                  sx={{
                    cursor: "pointer",
                    marginLeft: "auto",
                    fontSize: {
                      xs: "20px",
                      lg: "24px",
                    },
                    color: darkTheme.palette.primary.mainTextColor,
                  }}
                />
              </Tooltip>
              <CloseOutlinedIcon
                onClick={() => {
                  deleteTodoFunction(todoItem);
                }}
                sx={{
                  fontSize: {
                    xs: "24px",
                    lg: "30.86px",
                  },
                  cursor: "pointer",
                  color: darkTheme.palette.primary.mainTextColor,
                }}
              />
            </Box>
          )
      )}
    </>
  );
};

export default TodoBox;
