import type { Task } from "@/types/Task";
import { create } from "zustand";

interface TodoStore {
  todos: Task[];
  addTodo: (title: string) => void;
  completedTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  getTodo: () => Task[];
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
            status: "Not Started",
            createdAt: new Date(),
            dueDate: new Date(),
            priority: "Low",
            description: "",
            imageUrl: "",
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
