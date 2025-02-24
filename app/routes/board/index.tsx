import React from "react";
import { AddTodo } from "~/components/board/AddTodo";
import { TodoItem } from "~/components/board/TodoItem";
import useTodoStore from "~/store/useTodoStore";

export interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}

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
