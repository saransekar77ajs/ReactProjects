import reactLogo from "./assets/react.svg";

function Header() {
  return (
    <header className="header">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="list-item">Pricing</li>
          <li className="list-item">About</li>
          <li className="list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
