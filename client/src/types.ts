export type InitialTheme = {
  darkMode: boolean;
};

export interface TodoItem {
  id: string;
  todo: string;
  active: boolean;
  updatedAt: string;
}

export interface InitialState {
  todos: TodoItem[];
  error: string;
  loading: boolean;
  filterTerm: string;
  sortOrder: string;
  updateMode: boolean;
  updateTargetTodo: TodoItem;
}

export type time = {
  timestamp: string;
  timeAgo: string;
};
