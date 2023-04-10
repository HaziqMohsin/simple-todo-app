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
    set((state) => ({ taskList: [value, ...state.taskList] }));
  },
  removeTask: (value: string) => {
    set((state) => ({
      taskList: state.taskList.filter((v) => v.id !== value),
    }));
  },
  checkedTask: (value: number) => {
    const taskListCurrent = get().taskList;
    let selected = taskListCurrent[value];

    set((state) => ({
      taskList: state.taskList
        .map((v) => {
          if (v.id === selected.id) {
            return {
              ...v,
              status: v.status === "pending" ? "completed" : "pending",
            };
          } else {
            return v;
          }
        })
        .sort((a, b) =>
          b.status > a.status ? 1 : a.status > b.status ? -1 : 0
        ),
    }));
  },
});
