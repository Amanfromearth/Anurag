import { Music2Icon, PaperclipIcon, PhoneOutgoing } from "lucide-react";
import React from "react";

const TableComponent = () => {
  const data = [
    <PaperclipIcon className="h-5 w-5 text-gray-500" />,
    <PhoneOutgoing className="h-5 w-5 text-gray-500" />,
    <Music2Icon className="h-5 w-5 text-gray-500" />,
  ];

  return <div className="w-full flex flex-wrap">
    {data.map((item, index)=>{
        item
    })}
  </div>;
};

export default TableComponent;
