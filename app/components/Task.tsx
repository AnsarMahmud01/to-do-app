interface TaskProps {
  id: string;
  content: string;
}

export function Task({ id, content }: TaskProps) {
  return <div className="bg-task-bg p-2 mb-2 rounded shadow">{content}</div>;
}
