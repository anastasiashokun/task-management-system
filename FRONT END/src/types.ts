export type Task = {
  id: number;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
};

export type TaskCardProps = {
  tasks: Task[];
};

