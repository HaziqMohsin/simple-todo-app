import { create } from "zustand";
import { createTaskSlice } from "./slices/taskSlice";
import { ITask } from "./types/ITask";

export const useAppStore = create<ITask>()((...a) => ({
  ...createTaskSlice(...a),
}));
