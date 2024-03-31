import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../feature/themeSlice";
import todoReducer from "../feature/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
