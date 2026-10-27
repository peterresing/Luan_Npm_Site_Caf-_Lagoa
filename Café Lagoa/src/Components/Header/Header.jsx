import "./Header.css";
import cafe from "./coffee.png";

function Header() {
  return (
    <header class="cabecalho">
      <div class="logo-container">
        <img id="imglogo" src={cafe} alt="" />
        <span class="logo">Café Lagoa</span>
      </div>
      <nav>
        <ul class="menu">
          <li>
            <div class="botao botao-cheio">
            <a href="#hero">Início</a>
            </div>
          </li>
          <li>
            <a href="#servicos">Catálogo</a>
          </li>
          <li>
            <a href="#main">Sobre</a>
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