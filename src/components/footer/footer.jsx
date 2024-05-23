import logoFooter from "../../assets/logo-parnamirim-white.svg";

import "./footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <img src={logoFooter} alt="footer logo" />

        <div className="footer__content">
          <p>
            Av. João XXII, 647 - Cohabinal{" "}
            <span>CEP - 59140-690 - Parnamirim/RN</span>
          </p>
          <p>
            Telefone: (84) 98893-9666 <span>proinfoparnamirim@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="developer">Desenvolvido pela GTI - {year}</div>
    </footer>
  );
}
