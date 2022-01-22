import InputSearch from '../InputSearch';
import LoadingBar from '../LoadingBar';
import Logo from '../Logo';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar-layout">
    <LoadingBar />
    <div className="navbar">
      <div className="navbar__container screens">
        <Logo />
        <InputSearch />
      </div>
    </div>
  </div>
);

export default Navbar;
