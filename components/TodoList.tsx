import React from "react";

type Props = {
  text: string;
};

const TodoList = ({ text }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <input type="checkbox" className="" />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default TodoList;
