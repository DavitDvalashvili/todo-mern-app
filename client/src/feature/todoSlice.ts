// import { InitialState } from "../types";
// import { todoItem } from "../types";
// import { RootState } from "../App/store";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../types";
import axios from "axios";

const initialTodoState: InitialState = {
  todos: [],
  error: "",
  loading: false,
  filterTerm: "All",
  sortOrder: "desc",
};

export const fetchTodoData = createAsyncThunk(
  "todo/fetchTodo",
  async (filterTerm: string) => {
    const response = await axios.get(
      `http://localhost:3002/api/getTodo/${filterTerm}`
    );
    const data = response.data;
    console.log(data);
    return data;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState, // Corrected key name
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      state.filterTerm = action.payload;
    },
    sort: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTodoData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodoData.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
      console.log(typeof action.payload[0].active);
      state.error = "";
    });
    builder.addCase(fetchTodoData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default todoSlice.reducer;

export const { filter, sort } = todoSlice.actions;

// export const fetchTodo = createAsyncThunk("Todo", async (_, { getState }) => {
//   const { filterTerm, order } = (getState() as RootState).todo;
//   const response = await axios.get(
//     `http://localhost:3002/api/getTodo/${filterTerm}?order=${order}`
//   );
//   console.log(filterTerm);
//   const data = response.data;
//   return data;
// });

// const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     filter: (state, action: PayloadAction<string>) => {
//       state.filterTerm = action.payload;
//     },
//     sort: (state, action: PayloadAction<string>) => {
//       state.order = action.payload;
//     },
//   },
//     builder.addCase(addTodo.fulfilled, (state) => {
//       state.loading = false;
//     });
//     builder.addCase(addTodo.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message || "Something went wrong";
//     });

//     //updateTodo
//     builder.addCase(updateTodo.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(
//       updateTodo.fulfilled,
//       (state, action: PayloadAction<todoItem>) => {
//         state.loading = false;
//         state.error = "";
//         // Find the index of the updated todo item
//         const index = state.todo.findIndex(
//           (todo) => todo.id === action.payload.id
//         );
//         if (index !== -1) {
//           // Create a new todo item with the updated active status
//           const updatedTodo = {
//             ...state.todo[index],
//             active: action.payload.active,
//           };
//           // Update the todo array immutably
//           state.todo = [
//             ...state.todo.slice(0, index), // Items before the updated item
//             updatedTodo,
//             ...state.todo.slice(index + 1), // Items after the updated item
//           ];
//         }
//       }
//     );
//     builder.addCase(updateTodo.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message ?? "An error occurred.";
//     });
//   },
// });

// export const addTodo = createAsyncThunk<todoItem, string>(
//   "addTodo",
//   async (newTodoText) => {
//     const response = await axios.post("http://localhost:3002/api/addTodo", {
//       todo: newTodoText,
//     });
//     const data = response.data;
//     return data;
//   }
// );

// export const updateTodo = createAsyncThunk(
//   "todo/updateTodo",
//   async (updatedTodo: todoItem) => {
//     const response = await axios.put(
//       `http://localhost:3002/api/updateTodo/${updatedTodo.id}`,
//       updatedTodo
//     );

//     return response.data;
//   }
// );
