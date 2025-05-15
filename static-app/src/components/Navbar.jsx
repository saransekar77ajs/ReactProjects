import reactLogo from "../assets/react.svg";
function Navbar() {
  return (
    <>
      <header className="nav-container">
        <nav>
          <img src={reactLogo} alt="React Logo" />
          <span className="span-text">ReactFacts</span>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
