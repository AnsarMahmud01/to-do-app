import { useDroppable } from "@dnd-kit/core";
import type React from "react";

interface ColumnProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Column({ id, title, children }: ColumnProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="bg-column-bg p-4 rounded-lg w-72">
      <h2 className="font-bold mb-4">{title}</h2>
      <div className="min-h-[200px]">{children}</div>
    </div>
  );
}
