import InputSearch from '../InputSearch';
import Logo from '../Logo';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar__container screens">
      <Logo />
      <InputSearch />
    </div>
  </div>
);

export default Navbar;
