import { useState } from "react";
import { schoolsPerNeighborhood } from "../../data/data";
import "./neighborhoodSection.css";

export function NeighborhoodSection() {
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (neighborhood) => {
    setSelectedSchools(schoolsPerNeighborhood[neighborhood]);
    setSelectedButton(neighborhood);
  };

  return (
    <div className="container">
      <h2>Bairros: </h2>
      <div className="buttons">
        {Object.keys(schoolsPerNeighborhood).map((neighborhood, index) => (
          <button
            id=""
            className={
              selectedButton === neighborhood
                ? "button-selected"
                : "buttons__neighborhood-button"
            }
            key={index}
            onClick={() => handleClick(neighborhood)}
          >
            {neighborhood}
          </button>
        ))}
      </div>
      <div className="schools-table">
        {selectedSchools.length > 0 && (
          <table className="schools-table__info">
            <thead>
              <tr>
                <th>Escola</th>
                <th>Tipo de escola</th>
                <th>Quantidade de alunos</th>
              </tr>
            </thead>
            <tbody>
              {selectedSchools.map((school, index) => (
                <tr key={index}>
                  <td>{school.name}</td>
                  <td>{school.tag}</td>
                  <td>{school.studentAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
