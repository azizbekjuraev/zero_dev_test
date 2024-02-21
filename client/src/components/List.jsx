import "boxicons";
import { default as api } from "../store/apiSlice";

export default function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  let Transactions;

  const handleDelete = (e) => {
    if (!e.target.dataset.id) return 0;
    console.log(e.target.dataset.id);
    deleteTransaction({ _id: e.target.dataset.id });
  };

  if (isFetching) {
    Transactions = <div>Загрузка...</div>;
  } else if (isSuccess) {
    Transactions = data?.map((v, i) => (
      <Transaction key={i} category={v} handle={handleDelete}></Transaction>
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

function Transaction({ category, handle }) {
  const { name, color, _id, amount } = category;
  if (!category) return <></>;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2"
      style={{ borderRight: `8px solid ${color ?? "black"}` }}
    >
      <button className="px-3" onClick={handle}>
        <box-icon
          data-id={_id ?? ""}
          size="15px"
          name="trash-alt"
          type="solid"
        ></box-icon>
      </button>
      <span className="block w-full">{name}</span>
      <span className="block w-full text-zinc-500">${amount}</span>
    </div>
  );
}
