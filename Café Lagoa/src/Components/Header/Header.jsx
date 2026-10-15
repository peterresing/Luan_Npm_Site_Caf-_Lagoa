import "./Header.css";
import cachorro from "./cachorro.jpg";

function Header() {
  return (
    <header class="cabecalho">
      <div class="logo-container">
        <img id="imglogo" src={cachorro} alt="" />
        <span class="logo">Café Lagoa</span>
      </div>
      <nav>
        <ul class="menu">
          <li>
            <a href="#hero">Início</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1pomwE7GjDoVcLRNFMX0bS_lPyW6rTdIWzmqYvfhf7VM/edit?usp=sharing">
              Sobre
            </a>
          </li>
          <li>
            <a href="#footer">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;