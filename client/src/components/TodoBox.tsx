import { Box, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../App/hook";
import {
  fetchTodoData,
  updateTodo,
  UpdateMode,
  UpdateTargetTodo,
} from "../feature/todoSlice";
import { useEffect } from "react";
import { TodoItem } from "../types";

const TodoBox = () => {
  // Redux selector
  const { todos, filterTerm, sortOrder, updateTargetTodo } = useAppSelector(
    (state) => state.todo
  );

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

  const handleClick = (todoItem: TodoItem) => {
    dispatch(UpdateTargetTodo(todoItem));
    dispatch(UpdateMode());
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
              <div
                onClick={() => {
                  handleClick(todoItem);
                }}
              >
                update
              </div>
            </Box>
          )
      )}
    </>
  );
};

export default TodoBox;
