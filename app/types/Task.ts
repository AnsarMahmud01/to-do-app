export type TaskPriority = 'Low' | 'Moderate' | 'High';
export type TaskStatus = 'Not Started' | 'In Progress' | 'Completed';

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: Date;
  completed: boolean;
  imageUrl?: string;
}