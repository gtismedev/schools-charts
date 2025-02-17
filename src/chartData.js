import { schoolsPerNeighborhood } from "./data/data";

const emCountsByNeighborhood = {};
const cmeiCountsByNeighborhood = {};

for (const neighborhood in schoolsPerNeighborhood) {
  const schoolsInNeighborhood = schoolsPerNeighborhood[neighborhood];
  emCountsByNeighborhood[neighborhood] = schoolsInNeighborhood.filter(
    (school) => school.tag === "E. M."
  ).length;
  cmeiCountsByNeighborhood[neighborhood] = schoolsInNeighborhood.filter(
    (school) => school.tag === "C. I."
  ).length;
}

const neighborhoods = Object.keys(schoolsPerNeighborhood);
const emCounts = neighborhoods.map(
  (neighborhood) => emCountsByNeighborhood[neighborhood]
);
const cmeiCounts = neighborhoods.map(
  (neighborhood) => cmeiCountsByNeighborhood[neighborhood]
);

export const barChartData = {
  labels: neighborhoods,
  datasets: [
    {
      label: "Escola Municipal (E. M.)",
      data: emCounts,
      backgroundColor: "rgba(28, 49, 82, 1)",
      borderColor: "rgba(28, 49, 82, 1)",
    },
    {
      label: "Centro Infantil (C. I.)",
      data: cmeiCounts,
      backgroundColor: "#2F528A",
      borderColor: "#2F528A",
    },
  ],
};
