import { schoolsPerNeighborhood } from "./data/data";

const neighborhoods = Object.keys(schoolsPerNeighborhood);
const schoolCounts = neighborhoods.map(neighborhood => schoolsPerNeighborhood[neighborhood].length);

export const barChartData = {
  labels: neighborhoods,
  datasets: [
    {
      label: "Escolas",
      data: schoolCounts,
      backgroundColor: ["rgba(28, 49, 82, 1)"],
      borderColor: ["rgba(28, 49, 82,, 1"],
      borderWidth: 1,
    },
  ],
};