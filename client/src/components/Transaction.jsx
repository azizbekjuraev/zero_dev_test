export default function Transaction({ category, handle }) {
  const { name, color, _id, amount } = category;
  if (!category) return <></>;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2"
      style={{ borderRight: `8px solid ${color ?? "black"}` }}
    >
      <span className="block w-full">{name}</span>
      <span className="block w-full text-zinc-500">${amount}</span>
      <button className="px-3" onClick={handle}>
        <box-icon
          data-id={_id ?? ""}
          size="15px"
          name="trash-alt"
          type="solid"
        ></box-icon>
      </button>
    </div>
  );
}
