export interface ITask {
  taskList: TaskList[];
  addTask: (value: TaskList) => void;
}

export interface TaskList {
  id: number;
  text: string;
  status: string;
}
