import "boxicons";
import { default as api } from "../store/apiSlice";

export default function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let Transactions;

  if (isFetching) {
    Transactions = <div>Загрузка...</div>;
  } else if (isSuccess) {
    console.log(data);
    Transactions = data?.map((v, i) => (
      <Transaction key={i} category={v}></Transaction>
    ));
  } else if (isError) {
    Transactions = <div>Что-то пошло не так...</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">История</h1>
      {Transactions}
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
