import type { Route } from "./+types/home";
import TodoList from "./board";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "To-Do App" },
    { name: "description", content: "Create a to-do on the go!" },
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
