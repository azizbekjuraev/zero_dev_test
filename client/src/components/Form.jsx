import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import List from "./List";
import { default as api } from "../store/apiSlice";

const commonStyles = `
  width: 100%;
  margin-top: 0.25rem;
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: white;
  border: 1px solid #e2e8f0;
  font-size: 1rem; 
  &:focus {
    outline: none;
  }
`;

const StyledFormInput = styled.input`
  ${commonStyles}
`;

const StyledSelectOption = styled.select`
  ${commonStyles}
`;

function getInputData(e) {
  console.log(e.target.value);
}

export default function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = api.useAddTransactionMutation();

  const onSubmit = async (data) => {
    console.log(data);
    if (!data) return {};
    await addTransaction(data).unwrap();
    resetField("name");
    resetField("amount");
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <div className="font-bold pb-4 text-xl">Форма транзакции</div>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <StyledFormInput
              {...register("name")}
              type="text"
              placeholder="Зарплата, Аренда дома"
              className="form-input"
            />
          </div>
          <StyledSelectOption {...register("type")} className="form-input">
            <option value="Доход" defaultValue>
              Доход
            </option>
            <option value="Расход">Расход</option>
            <option value="Экономия">Экономия</option>
          </StyledSelectOption>
          <div className="input-group">
            <StyledFormInput
              {...register("amount")}
              type="amount"
              placeholder="Cумма"
              className="form-input"
              onChange={getInputData}
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Добавить
            </button>
          </div>
        </div>
      </form>
      <List></List>
    </div>
  );
}
