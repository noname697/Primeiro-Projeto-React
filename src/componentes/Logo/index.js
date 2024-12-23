import logo from "../../imagens/logo.svg";
import "./estilo.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" className="logo-img"></img>
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
