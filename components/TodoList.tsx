"use client";
import React, { useState } from "react";
import { data } from "@/utils/exampleData";
import { useAppStore } from "@/store/useStore";

type Props = {};

const TodoList = ({}: Props) => {
  //   const [taskList, setTaskList] = useState<IResponse[]>(data);
  const taskList = useAppStore((state) => state.taskList);
  const removeTask = useAppStore((state) => state.removeTask);

  return (
    <div>
      {taskList.map((v, i) => {
        return (
          <div key={i} className="flex gap-2 items-center">
            <div>
              <input type="checkbox" className="" />
            </div>
            <div>{v.text}</div>
            <div
              className="text-red-600 cursor-pointer"
              onClick={() => removeTask(v.id)}
            >
              x
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
