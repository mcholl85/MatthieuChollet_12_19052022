import logo from '../../assets/img/logo.png';
import iconYoga from '../../assets/img/icon-yoga.png';
import iconSwim from '../../assets/img/icon-swim.png';
import iconBike from '../../assets/img/icon-bike.png';
import iconStrong from '../../assets/img/icon-strong.png';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="logo sportsee" />
      <NavLink className="nav__link" to="#">
        Accueil
      </NavLink>
      <NavLink className="nav__link" to="#">
        Profil
      </NavLink>
      <NavLink className="nav__link" to="#">
        Réglage
      </NavLink>
      <NavLink className="nav__link" to="#">
        Communauté
      </NavLink>
      <div className="nav__activities">
        <div className="nav__activities__links">
          <Link to="#">
            <img src={iconYoga} alt="yoga activity" />
          </Link>
          <Link to="#">
            <img src={iconSwim} alt="swimming activity" />
          </Link>
          <Link to="#">
            <img src={iconBike} alt="biking activity" />
          </Link>
          <Link to="#">
            <img src={iconStrong} alt="strong activity" />
          </Link>
        </div>
        <p className="nav__activities__copyright">Copyright, SportSee 2020</p>
      </div>
    </nav>
  );
}

export default Navbar;
