import React from "react";
import "boxicons";

export default function List() {
  const obj = [
    {
      name: "Экономия",
      color: "rgb(255, 99, 132)",
    },
    {
      name: "Доход",
      color: "rgb(54, 162, 235)",
    },
    {
      name: "Расход",
      color: "rgb(255, 205, 86)",
    },
  ];

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">История</h1>
      {obj.map((v, i) => (
        <Transaction category={v} key={i}></Transaction>
      ))}
    </div>
  );
}

function Transaction({ category }) {
  const { name, color } = category;
  if (!category) return <></>;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2"
      style={{ borderRight: `8px solid ${color ?? "black"}` }}
    >
      <button className="px-3">
        <box-icon size="15px" name="trash-alt" type="solid"></box-icon>
      </button>
      <span className="block w-full">{name}</span>
    </div>
  );
}
