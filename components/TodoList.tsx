"use client";
import React, { useState, useEffect } from "react";
import { data } from "@/utils/exampleData";
import { useAppStore } from "@/store/useStore";
import { shallow } from "zustand/shallow";

type Props = {};

const TodoList = ({}: Props) => {
  //   const [taskList, setTaskList] = useState<IResponse[]>(data);
  const taskList = useAppStore((state) => state.taskList);
  const removeTask = useAppStore((state) => state.removeTask);
  const checkedTask = useAppStore((state) => state.checkedTask, shallow);

  return (
    <div className="flex flex-col gap-3 w-full">
      {taskList.map((v, i) => {
        return (
          <div
            key={i}
            className="flex gap-4 items-center border border-solid border-gray-800 rounded-lg p-4 w-full"
          >
            <div className="w-8">
              <input
                type="checkbox"
                className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-700 checked:border-green-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                onClick={() => checkedTask(i)}
                checked={v.status === "completed"}
              />
            </div>
            <div
              className={`text-lg w-full ${
                v.status === "completed" ? "text-gray-800 italic" : "text-white"
              }`}
            >
              {v.text}
            </div>
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
