"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { data } from "@/utils/exampleData";
import { v4 as uuidv4 } from "uuid";

type Props = {};

type Inputs = {
  taskValue: string;
};

const InputForm = (props: Props) => {
  const [listTask, setListTask] = useState(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const id = uuidv4();
    let param = {
      id: id,
      text: data.taskValue,
      status: "pending",
    };
    setListTask([...listTask, param]);
    console.log(id);
    console.log(param);
    console.log(listTask);
  };

  return (
    <form className="flex gap-3 w-full mb-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-1 relative">
        <input
          className="p-4 w-full rounded-lg"
          {...register("taskValue", { required: true })}
        />
        {errors.taskValue && (
          <span className="absolute -bottom-7 left-0 text-red-600">
            This field is required
          </span>
        )}
      </div>
      <input
        type="submit"
        className="bg-blue-400 border border-solid border-blue-400 rounded-lg px-4 py-2 cursor-pointer"
      />
    </form>
  );
};

export default InputForm;
