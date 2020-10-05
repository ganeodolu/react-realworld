const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
const EDIT_TODO = 'todos/EDIT_TODO' as const;

let nextId = 1;

export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    content,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const editTodo = (id: number, content: string) => ({
  type: EDIT_TODO,
  payload: { id, content },
});

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof editTodo>;

export type Todo = {
  id: number;
  content: string;
  isCompleted: boolean;
};

export type TodosState = Todo[];

const initialState: TodosState = [];

function todos(state: TodosState = initialState, action: TodosAction): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        content: action.payload.content,
        isCompleted: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case EDIT_TODO:
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo));
    default:
      return state;
  }
}

export default todos;
