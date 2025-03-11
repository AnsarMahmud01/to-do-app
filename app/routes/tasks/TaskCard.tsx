import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Task } from "@/types/Task";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "In Progress":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-red-100 text-red-600";
    }
  };

  // Форматирование даты
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
  };

  return (
    <Card className="mb-4 border-l-4 border-l-blue-500 shadow-sm">
      <CardContent className="p-4">
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="flex items-start">
              <div className="h-4 w-4 mt-1 rounded-full border-2 border-blue-500 mr-2" />
              <div>
                <h3 className="font-medium">{task.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">
                  Priority:{" "}
                  <span className="text-gray-700">{task.priority}</span>
                </p>
                <p className="text-xs text-gray-500">
                  Status:
                  <span
                    className={`inline-block ml-1 px-2 py-0.5 rounded-full text-xs ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </p>
              </div>
              <p className="text-xs text-gray-500">
                Created on: {formatDate(task.createdAt)}
              </p>
            </div>
          </div>
          <div className="ml-4">
            {task.imageUrl && (
              <div className="w-16 h-16 rounded overflow-hidden">
                <img
                  src={task.imageUrl}
                  alt="Task"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="p-0 h-8 w-8 absolute top-2 right-2"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
