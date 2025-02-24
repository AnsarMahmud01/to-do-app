import type { Route } from "./+types/home";
import TodoList from "./board/board";
import TodoApp from "./board/board";
import KanbanBoard from "./board/board";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div>
        <TodoList />
      </div>
    </>
  );
}
