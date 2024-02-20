import styled from "styled-components";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Labels from "./Labels";

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
  const config = {
    data: {
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 100, 50],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  console.log(typeof config.data.datasets[0].backgroundColor);

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item ">
        <div className="chart relative">
          <Doughnut {...config}></Doughnut>
          <StyledChartTitle className="mb-4 font-bold title">
            Общий <span className="block text-3xl text-emerald-400">${0}</span>
          </StyledChartTitle>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels></Labels>
        </div>
      </div>
    </div>
  );
}
