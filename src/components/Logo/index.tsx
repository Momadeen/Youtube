import { useScreenWidth } from 'hooks/useScreenWidth';
import youtube from 'images/logo.webp';
import youtubeMob from 'images/logoMob.png';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  const screenWidth = useScreenWidth();
  return (
    <Link to="/search" className="logo">
      <img src={screenWidth > 500 ? youtube : youtubeMob} alt="logo" />
    </Link>
  );
};

export default Logo;
