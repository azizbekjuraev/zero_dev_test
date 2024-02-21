import styled from "styled-components";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Labels from "./Labels";
import { default as api } from "../store/apiSlice";
import { chart_Data, get_Total } from "../helper/helper";

Chart.register(ArcElement);

const StyledChartTitle = styled.h3`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  margin-left: auto;
  margin-right: auto;
`;

export default function Graph() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let graphData;
  let totalAmount;

  if (isFetching) {
    graphData = <div>Загрузка...</div>;
  } else if (isSuccess) {
    totalAmount = get_Total(data);
    graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
  } else if (isError) {
    graphData = <div>Что-то пошло не так...</div>;
  }

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item ">
        <div className="chart relative">
          {graphData}
          <StyledChartTitle className="mb-4 font-bold title">
            Общий{" "}
            <span className="block text-3xl text-emerald-400">
              ${totalAmount ?? 0}
            </span>
          </StyledChartTitle>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels></Labels>
        </div>
      </div>
    </div>
  );
}
