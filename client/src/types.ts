export type InitialTheme = {
  darkMode: boolean;
};

export interface TodoItem {
  id: string;
  todo: string;
  active: boolean;
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
