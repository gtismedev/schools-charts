import logoParnamirim from "../../assets/logo-parnamirim.svg";
import logoGtiFundoBranco from "../../assets/logo-fundo-branco-texto.png";

import "./header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__nav">
        <img
          src={logoGtiFundoBranco}
          alt="Logo do GTI"
          className="header__img--logo"
        />
      </div>
      <div className="header__img-container">
        <img
          className="header__img"
          src={logoParnamirim}
          alt="logo Parnamirim"
        />
      </div>
    </header>
  );
}
