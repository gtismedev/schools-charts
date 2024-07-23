import { useRouteError } from "react-router-dom";
import { Header } from "../../components/header/header";

import "./error-page.css";
import "../../reset.css";
import { Footer } from "../../components/footer/footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />

      <div className="container__erro-page">
        <h1>Oops!</h1>
        <p className="container__error">
          Desculpe, um erro inexperado aconteceu.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>

        <div>
          <button className="container__button">Voltar</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
