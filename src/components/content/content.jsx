import { schoolsPerNeighborhood } from "../../data/data";

import "./content.css";

export function Content() {
  const totalSchools = Object.values(schoolsPerNeighborhood).reduce(
    (total, schools) => total + schools.length,
    0
  );

  const neighborhoods = Object.keys(schoolsPerNeighborhood).length;

  return (
    <>
      <div className="title">
        <h1>Infográfico escolar</h1>
        <p>Gráfico relativo a bairros e escolas da Secretaria de Educação</p>
      </div>
      <div className="content">
        <div className="content__box">
          <p>{totalSchools}</p>
          <span>Escolas</span>
        </div>
        <div className="content__box">
          <p>{neighborhoods}</p>
          <span>Bairros</span>
        </div>
        <div className="content__box">
          <p>25000</p>
          <span>Alunos</span>
        </div>
      </div>
    </>
  );
}
