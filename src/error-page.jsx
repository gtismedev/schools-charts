import { useRouteError } from "react-router-dom";
import { Header } from "./components/header/header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />

      <div>
        <h1>Oops!</h1>
        <p>Desculpe, um erro inexperado aconteceu.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
