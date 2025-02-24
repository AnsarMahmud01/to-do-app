import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "./Task";

interface SortableTaskProps {
  id: string;
  content: string;
}

export function SortableTask({ id, content }: SortableTaskProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Task id={id} content={content} />
    </div>
  );
}
