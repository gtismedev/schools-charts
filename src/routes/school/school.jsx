import { Link } from "react-router-dom";
import { Header } from "../../components/header/header";

import "./school.css";
import { Footer } from "../../components/footer/footer";

function School() {
  return (
    <>
      <Header />
      <main className="container">
        <Link to={`/`}>
          {" "}
          <span>&lt;</span> Voltar
        </Link>

        <div className="school__container">
          <h1>Nome da escola</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default School;
