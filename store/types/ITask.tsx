export interface ITask {
  taskList: TaskList[];
  addTask: (value: TaskList) => void;
  removeTask: (value: string) => void;
}

export interface TaskList {
  id: string;
  text: string;
  status: string;
}
