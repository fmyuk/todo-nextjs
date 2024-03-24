export type TodoType = {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  endDate: Date;
  createdAt?: Date;
};
