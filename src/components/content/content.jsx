import { schoolsPerNeighborhood } from "../../data/data";

import "./content.css";

export function Content() {
  const totalSchools = Object.values(schoolsPerNeighborhood).reduce(
    (total, schools) => total + schools.length,
    0
  );

  const neighborhoods = Object.keys(schoolsPerNeighborhood).length;

  const total = Object.values(schoolsPerNeighborhood)
    .flat()
    .reduce((accumulator, school) => accumulator + school.studentAmount, 0);

  return (
    <>
      <div className="title">
        <h1>ParnaInfoEdu</h1>
        <p>Panorama da Rede Municipal de Ensino de Parnamirim</p>
      </div>
      <div className="content">
        <div className="content__box">
          <p>{totalSchools}</p>
          <span>Unidades de Ensino</span>
        </div>
        <div className="content__box">
          <p>{neighborhoods}</p>
          <span>Bairros</span>
        </div>
        <div className="content__box">
          <p>{total}</p>
          <span>Alunos</span>
        </div>
      </div>
    </>
  );
}
