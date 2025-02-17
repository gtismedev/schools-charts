import { useState } from "react";
import { schoolsPerNeighborhood } from "../../data/data";
import { Link } from "react-router-dom";
import "./neighborhoodSection.css";

export function NeighborhoodSection() {
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const allSchools = Object.values(schoolsPerNeighborhood).flat();

  const handleClick = (neighborhood) => {
    setSelectedSchools(schoolsPerNeighborhood[neighborhood]);
    setSelectedButton(neighborhood);
  };

  const handleShowAll = () => {
    setSelectedSchools(allSchools);
    setSelectedButton(null);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setSelectedSchools(allSchools);
    } else {
      const filteredSchools = allSchools.filter((school) => {
        const schoolNameMatch = school.name.toLowerCase().includes(term);
        const neighborhoodMatch = school.address.toLowerCase().includes(term);
        return schoolNameMatch || neighborhoodMatch;
      });
      setSelectedSchools(filteredSchools);
    }
  };

  return (
    <div className="container__neiborhood">
      <h2>Bairros:</h2>
      <div className="buttons">
        <button
          className={
            selectedButton === null
              ? "button-selected"
              : "buttons__neighborhood-button"
          }
          onClick={handleShowAll}
        >
          Todas as unidades
        </button>
        {Object.keys(schoolsPerNeighborhood).map((neighborhood, index) => (
          <button
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

      <div className="neiborhood__search">
        <input
          type="text"
          placeholder="Digite o nome da Escola ou Bairro"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="schools-table">
        {selectedSchools.length > 0 ? (
          <table className="schools-table__info">
            <caption style={captionStyle}>
              EI - Educação infantil / EF - Ensino fundamental
            </caption>
            <thead>
              <tr>
                <th>Unidade</th>
                <th>Etapa Educativa</th>
                <th>Qtd. de alunos</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {selectedSchools.map((school) => (
                <tr key={school.id}>
                  <td>{school.name}</td>
                  <td>{school.stage}</td>
                  <td>{school.studentAmount}</td>
                  <td>
                    <Link
                      style={linkStyle}
                      to={`escola/${school.id}`}
                      className="buttons__table"
                    >
                      Unidade
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  padding: "5px",
};

const captionStyle = {
  captionSide: "bottom",
  padding: "10px",
};
