// components/dashboard/TaskStatusSection.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface TaskStatusProps {
  completed: number;
  inProgress: number;
  notStarted: number;
  total: number;
}

const TaskStatusSection = ({
  completed,
  inProgress,
  notStarted,
  total,
}: TaskStatusProps) => {
  // Рассчитываем проценты
  const completedPercent = Math.round((completed / total) * 100);
  const inProgressPercent = Math.round((inProgress / total) * 100);
  const notStartedPercent = Math.round((notStarted / total) * 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Task Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  strokeDasharray={`${completedPercent}, 100`}
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
                <text
                  x="18"
                  y="20"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fill="#000"
                >
                  {completedPercent}%
                </text>
              </svg>
            </div>
            <p className="text-sm mt-2 text-center flex items-center">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-1 inline-block"></span>
              Completed
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#2196F3"
                  strokeWidth="2"
                  strokeDasharray={`${inProgressPercent}, 100`}
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
                <text
                  x="18"
                  y="20"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fill="#000"
                >
                  {inProgressPercent}%
                </text>
              </svg>
            </div>
            <p className="text-sm mt-2 text-center flex items-center">
              <span className="h-2 w-2 bg-blue-500 rounded-full mr-1 inline-block"></span>
              In Progress
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#F44336"
                  strokeWidth="2"
                  strokeDasharray={`${notStartedPercent}, 100`}
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
                <text
                  x="18"
                  y="20"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fill="#000"
                >
                  {notStartedPercent}%
                </text>
              </svg>
            </div>
            <p className="text-sm mt-2 text-center flex items-center">
              <span className="h-2 w-2 bg-red-500 rounded-full mr-1 inline-block"></span>
              Not Started
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskStatusSection;
