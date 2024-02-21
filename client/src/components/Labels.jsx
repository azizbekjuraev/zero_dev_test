import { default as api } from "../store/apiSlice";

export default function Labels() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let Transactions;

  if (isFetching) {
    Transactions = <div>Загрузка...</div>;
  } else if (isSuccess) {
    Transactions = data?.map((v, i) => (
      <LabelComponent key={i} data={v}></LabelComponent>
    ));
  } else if (isError) {
    Transactions = <div>Что-то пошло не так...</div>;
  }

  return <>{Transactions}</>;
}

function LabelComponent({ data }) {
  if (!data) return <></>;
  const { type, color, percent } = data;
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
