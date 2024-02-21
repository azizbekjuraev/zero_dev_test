import "boxicons";
import { default as api } from "../store/apiSlice";

export default function List() {
  const res = api.useGetTransactionQuery();
  console.log(res.data);

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">История</h1>
      {res.data?.map((v, i) => (
        <Transaction category={v} key={i}></Transaction>
      ))}
    </div>
  );
}

function Transaction({ category }) {
  const { name, color, amount } = category;
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
      <span className="block w-full">{amount}$</span>
    </div>
  );
}
