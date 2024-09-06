import { Link, useMatches } from "react-router-dom";

import { schoolsPerNeighborhood } from "../../data/data";

import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

import "./school.css";

function School() {
  const matches = useMatches();
  const params = matches[0].params.schoolId;
  const schoolId = params;
  console.log("matches:", matches);
  console.log("schoolId:", schoolId);

  let schoolData;
  for (const neighborhood in schoolsPerNeighborhood) {
    const schoolsInNeighborhood = schoolsPerNeighborhood[neighborhood];
    schoolData = schoolsInNeighborhood.find(
      (school) => school.id == parseInt(schoolId, 10)
    );
    console.log("schoolData:", schoolData);
    if (schoolData) break;
  }

  console.log("schoolData:", schoolData);

  if (!schoolData) {
    return (
      <>
        <Header />
        <div className="container">
          <h2>Escola não encontrada</h2>
          <br />
          <Link style={linkStyle} className="buttons__table" to="/">
            Voltar
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container">
        <Link to="/">
          <span></span> Voltar
        </Link>{" "}
        <div className="school__container">
          <br />
          <h2>{schoolData.name}</h2>
          <div className="school__info">
            <p>Telefone: {schoolData.phone}</p>
            <p>Endereço: {schoolData.address}</p>
          </div>

          <h3>Gestores:</h3>

          <div className="school__directors">
            <div className="director">
              <h4>
                Diretor(a) Pedagógico: {schoolData.pedagogicalDirector.name}
              </h4>
            </div>
            <div className="director">
              <h4>
                Diretor ADM-Financeiro: {schoolData.admFinancialDirector.name}
              </h4>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const linkStyle = {
  textDecoration: "none",
  padding: "5px",
};

export default School;
