export default function Labels() {
  const obj = [
    {
      type: "Экономия",
      color: "rgb(255, 99, 132)",
      percent: 45,
    },
    {
      type: "Доход",
      color: "rgb(54, 162, 235)",
      percent: 20,
    },
    {
      type: "Расход",
      color: "rgb(255, 205, 86)",
      percent: 10,
    },
  ];

  return (
    <>
      {obj.map((v, i) => (
        <LabelComponent key={i} data={v}></LabelComponent>
      ))}
    </>
  );
}

function LabelComponent({ data }) {
  if (!data) return <></>;
  const { type, color, percent } = data;
  console.log(type);
  return (
    <div className="label flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: color ?? "black" }}
        ></div>
        <h3 className="text-md">{type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{percent ?? 0}%</h3>
    </div>
  );
}
