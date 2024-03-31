import { Box, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../App/hook";
import { fetchTodo } from "../feature/todoSlice";
import { useEffect } from "react";

const TodoBox = () => {
  // Redux selector
  const todo = useAppSelector((state) => state.todo).todo;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <>
      {todo.map((todoItem) => (
        <Box
          key={todoItem.id}
          display="FLEX"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{todoItem.todo}</Typography>
          <Typography>{todoItem.active}</Typography>
        </Box>
      ))}
    </>
  );
};

export default TodoBox;
