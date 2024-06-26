import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../types";
import axios from "axios";
import { TodoItem } from "../types";

// API base URL
const Api_Url = "https://todo-mern-app-api.vercel.app/api";

// Initial state for todo slice
const initialTodoState: InitialState = {
  todos: [],
  error: "",
  loading: false,
  filterTerm: "All",
  sortOrder: "desc",
  updateMode: false,
  updateTargetTodo: {
    id: "",
    todo: "",
    active: false,
    updatedAt: "",
  },
};

// Async thunks for fetching, adding, updating, deleting, and clearing todos
export const fetchTodoData = createAsyncThunk(
  "todo/fetchTodo",
  async ({
    filterTerm,
    sortOrder,
  }: {
    filterTerm: string;
    sortOrder: string;
  }) => {
    const response = await axios.get(
      `${Api_Url}/getTodo/${filterTerm}?order=${sortOrder}`
    );
    const data = response.data;

    return data;
  }
);

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (newTodo: { todo: string }) => {
    const response = await axios.post(`${Api_Url}/addTodo`, newTodo);
    const data = response.data;
    return data;
  }
);

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async (updatedTodo: TodoItem) => {
    const response = await axios.put(
      `${Api_Url}/updateTodo/${updatedTodo.id}`,
      updatedTodo
    );
    const data = response.data;
    return data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (deletedTodo: TodoItem) => {
    const response = await axios.delete(
      `${Api_Url}/deleteTodo/${deletedTodo.id}`
    );
    const data = response.data;
    if (response?.status === 200) return deletedTodo;
    return data;
  }
);

export const clearCompletedTodo = createAsyncThunk(
  "todo/clearCompletedTodo",
  async () => {
    const response = await axios.delete(`${Api_Url}/clearCompletedTodo`);
    const data = response.data;
    return data;
  }
);

// Todo slice with reducers and extra reducers
const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    // Reducer to update filter term
    filter: (state, action: PayloadAction<string>) => {
      state.filterTerm = action.payload;
    },
    // Reducer to update sort order
    sort: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
    },
    // Reducer to toggle update mode
    UpdateMode: (state) => {
      state.updateMode = !state.updateMode;
    },
    // Reducer to set target todo for updating
    UpdateTargetTodo: (state, action) => {
      state.updateTargetTodo = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTodoData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodoData.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTodoData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.unshift(action.payload);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos.splice(index, 1);
    });
    builder.addCase(clearCompletedTodo.fulfilled, (state) => {
      state.todos = state.todos.filter((todo) => todo.active === true);
    });
  },
});

export default todoSlice.reducer;

export const { filter, sort, UpdateMode, UpdateTargetTodo } = todoSlice.actions;
