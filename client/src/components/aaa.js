import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { InitialState } from "../types";
import { todoItem } from "../types";
import { RootState } from "../App/store";

const initialState: InitialState = {
  todo: [],
  error: "",
  loading: false,
  filterTerm: "All",
  order: "desc",
};

export const fetchTodo = createAsyncThunk(
  "getTodo",
  async (_, { getState }) => {
    const { filterTerm, order } = (getState() as RootState).todo;
    const response = await axios.get(
      `http://localhost:3002/api/getTodo/${filterTerm}?order=${order}`
    );
    console.log(filterTerm);
    const data = response.data;
    return data;
  }
);

export const addTodo = createAsyncThunk<string, string>(
  "addTodo",
  async (newTodo) => {
    const response = await axios.post("http://localhost:3002/api/addTodo", {
      newTodo,
    });
    const data = response.data;
    return data;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      state.filterTerm = action.payload;
    },
    sort: (state, action: PayloadAction<string>) => {
      state.order = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchTodo.fulfilled,
      (state, action: PayloadAction<todoItem[]>) => {
        state.loading = false;
        state.todo = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.loading = false;
      state.todo = [];
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(addTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default todoSlice.reducer;

