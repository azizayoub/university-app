import "./Header.css";

function Header() {
  return (
    <header className="App-header" id="home">
      <p className="header-eyebrow">UNIVERSITY APP · COMMUNAUTÉ ÉTUDIANTE</p>
      <h1>Les étudiants, au cœur de l’université.</h1>
      <p className="header-description">
        Découvrez les profils et les parcours de notre communauté.
      </p>
      <a className="header-action" href="#students">
        Découvrir les étudiants <span aria-hidden="true">↓</span>
      </a>
    </header>
  );
}

export default Header;
