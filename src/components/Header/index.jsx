function Header({ firstName }) {
  return (
    <header>
      <h1 className="header">
        Bonjour <span className="header--red">{firstName}</span>
      </h1>
      <p className="message">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  );
}

export default Header;
