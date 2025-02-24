import { create } from "zustand";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (title: string) => void;
  completedTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  getTodo: () => Todo[];
}

const useTodoStore = create<TodoStore>()(
  (set, get) => ({
    todos: [],
    addTodo: (title: string) => {
      set((state) => ({
        todos: [...state.todos, 
          {
            id: Date.now(),
            title,
            completed: false,
          }
        ]
      }))
    },
    completedTodo: (id: number) => {
      set((state) => ({
        todos: state.todos.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo)
      }))
    },
    deleteTodo: (id: number) => {
      set((state)=>({
        todos: state.todos.filter((todo)=> todo.id !== id)
      }))
    },

    getTodo: () => get().todos
  }),
)

export default useTodoStore;
