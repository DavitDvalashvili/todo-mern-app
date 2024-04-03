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
import { TodoItem } from "../types";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const TodoBox = () => {
  // Redux selector
  const { todos, filterTerm, sortOrder, updateTargetTodo, updateMode } =
    useAppSelector((state) => state.todo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filterTerm && sortOrder) {
      dispatch(fetchTodoData({ filterTerm, sortOrder }));
    }
  }, [dispatch, filterTerm, sortOrder]);

  const toggleTodoStatus = (initialTodo: TodoItem) => {
    const updatedTodo = { ...initialTodo, active: !initialTodo.active };
    dispatch(updateTodo(updatedTodo));
  };

  const deleteTodoFunction = (deleteTargetTodo: TodoItem) => {
    dispatch(deleteTodo(deleteTargetTodo));
  };

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
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>{todoItem.todo}</Typography>
              <Typography
                onClick={() => {
                  toggleTodoStatus(todoItem);
                }}
              >
                {todoItem.active.toString()}
              </Typography>
              <CloseOutlinedIcon
                onClick={() => {
                  deleteTodoFunction(todoItem);
                }}
              />
              <EditOutlinedIcon
                onClick={() => {
                  handleUpdateClick(todoItem);
                }}
              />
            </Box>
          )
      )}
    </>
  );
};

export default TodoBox;
