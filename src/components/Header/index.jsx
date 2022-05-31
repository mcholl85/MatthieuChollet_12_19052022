function Header({ firstName }) {
  return (
    <header className="header">
      <h1 className="header__title">
        Bonjour <span className="header__title--red">{firstName}</span>
      </h1>
      <p className="header__message">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  );
}

export default Header;
