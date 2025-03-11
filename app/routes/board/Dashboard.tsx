// components/Dashboard.tsx
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/header/Header";
import WelcomeSection from "./WelcomeSection";
import TaskCard from "../tasks/TaskCard";
// import TaskStatusSection from "./dashboard/TaskStatusSection";
import type { Task } from "@/types/Task";
import TaskStatusSection from "../tasks/TaskStatusSection";
import useTodoStore from "@/store/useTodoStore";

const Dashboard = () => {
  const { todos } = useTodoStore();
  const tasks = todos;

  // Фильтруем задачи по статусу
  const pendingTasks = tasks.filter((task) => task.status !== "Completed");
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  // Статистика для круговых диаграмм
  const taskStats = {
    completed: tasks.filter((task) => task.status === "Completed").length,
    inProgress: tasks.filter((task) => task.status === "In Progress").length,
    notStarted: tasks.filter((task) => task.status === "Not Started").length,
    total: tasks.length,
  };

  return (
    <div className="p-6">
      <Header />
      <WelcomeSection
        username="Sundar"
        avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format"
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 mr-2 text-gray-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                To-Do
              </CardTitle>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500">20 June</p>
                <span className="mx-2 text-sm text-gray-300">•</span>
                <p className="text-sm text-gray-500">Today</p>
                <Button size="sm" variant="ghost" className="ml-2">
                  <PlusCircle className="h-4 w-4 mr-1" />
                  <span>Add task</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {pendingTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4 space-y-6">
          <TaskStatusSection {...taskStats} />

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 mr-2 text-gray-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Completed Task
              </CardTitle>
            </CardHeader>
            <CardContent>
              {completedTasks.map((task) => (
                <div key={task.id} className="mb-4 border rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="h-4 w-4 mt-1 rounded-full bg-green-500 mr-2" />
                    <div>
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {task.description}
                      </p>
                      <div className="mt-2">
                        <p className="text-xs">
                          <span className="text-green-500">
                            Status: Completed
                          </span>
                        </p>
                        <p className="text-xs text-gray-500">
                          Completed{" "}
                          {completedTasks.indexOf(task) === 0 ? "2" : "3"} days
                          ago
                        </p>
                      </div>
                    </div>
                    {task.imageUrl && (
                      <div className="ml-auto">
                        <div className="w-16 h-16 rounded overflow-hidden">
                          <img
                            src={task.imageUrl}
                            alt="Task"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
