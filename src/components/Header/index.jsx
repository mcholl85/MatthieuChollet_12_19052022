function Header({ firstName }) {
  return (
    <header>
      <h1 className="dashboard__heading">
        Bonjour <span className="dashboard__heading--red">{firstName}</span>
      </h1>
      <p className="dashboard__message">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  );
}

export default Header;
