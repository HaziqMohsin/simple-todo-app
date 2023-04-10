import { StateCreator } from "zustand";
import { ITask, TaskList } from "../types/ITask";

export const createTaskSlice: StateCreator<ITask> = (set, get) => ({
  taskList: [
    {
      id: "1",
      text: "clear the bathroom",
      status: "pending",
    },
    {
      id: "2",
      text: "clear the bathroom",
      status: "pending",
    },
    {
      id: "3",
      text: "clear the kitchen",
      status: "pending",
    },
  ],
  addTask: (value: TaskList) => {
    set((state) => ({ taskList: [...state.taskList, value] }));
  },
  removeTask: (value: string) => {
    const taskList = get().taskList;
    const updateTaskList = taskList.filter((v) => v.id !== value);
    set(() => ({ taskList: updateTaskList }));
  },
});
