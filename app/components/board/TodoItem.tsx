import type { TodoItemProps } from "~/routes/board";
import useTodoStore from "~/store/useTodoStore";

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
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
