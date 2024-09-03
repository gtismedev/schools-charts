import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { schoolsPerNeighborhood } from "../../data/data";

import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

function School({ match }) {
  const { id } = match.params;
  const schoolData = schoolsPerNeighborhood[id];

  if (!schoolData) {
    return (
      <div className="container">
        <p>Escola não encontrada</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="container">
        <Link to="/">
          <span>&lt;</span> Voltar
        </Link>

        <div className="school__container">
          <h1>{schoolData.name}</h1>
          <p>Telefone: {schoolData.phone}</p>
          <p>Endereço: {schoolData.address}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

School.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default School;
