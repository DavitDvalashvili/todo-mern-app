import { Box, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../App/hook";
import { fetchTodoData } from "../feature/todoSlice";
import { useEffect } from "react";

const TodoBox = () => {
  // Redux selector
  const { todos, filterTerm } = useAppSelector((state) => state.todo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    filterTerm && dispatch(fetchTodoData(filterTerm));
  }, [dispatch, filterTerm]);

  return (
    <>
      {todos.map((todoItem) => (
        <Box
          onClick={() => {
            console.log(typeof todoItem.active);
          }}
          key={todoItem.id}
          display="FLEX"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{todoItem.todo}</Typography>
          <Typography>{todoItem.active.toString()}</Typography>
        </Box>
      ))}
    </>
  );
};

export default TodoBox;

// const handleClick1 = (initialTodo: todoItem) => {
//   console.log(active);
//   //console.log("Initial Todo:", typeof initialTodo.active);
//   //const updatedTodo = { ...initialTodo, active: !initialTodo.active };
//   //console.log("Updated Todo:", typeof updatedTodo.active);
// };
