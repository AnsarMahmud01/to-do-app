import React, { useState } from "react";
import useTodoStore from "~/store/useTodoStore";

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new todo..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const completedTodo = useTodoStore((state) => state.completedTodo);

  return (
    <li className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={() => completedTodo(todo.id)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          readOnly
        />
        <span
          className={`text-lg ${
            todo.completed ? "line-through text-gray-500" : "text-gray-900"
          }`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-3 py-1 text-sm text-red-600 hover:text-red-800 transition-colors"
      >
        Delete
      </button>
    </li>
  );
};

const TodoList: React.FC = () => {
  const todos = useTodoStore((state) => state.getTodo());

  return (
    <div className="max-w-2xl mx-auto p-4">
      <AddTodo />
      <ul className="divide-y divide-gray-200 border rounded-lg overflow-hidden">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
