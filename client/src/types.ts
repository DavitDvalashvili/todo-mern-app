export type InitialTheme = {
  darkMode: boolean;
};

export type todoItem = {
  id: string;
  todo: string;
  active: boolean;
};

export type InitialState = {
  todo: todoItem[];
  error: string;
  loading: boolean;
  filterTerm: string;
  order: string;
};
