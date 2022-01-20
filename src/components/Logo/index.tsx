import { useScreenWidth } from '../../hooks/useScreenWidth';
import youtube from '../../images/logo.webp';
import youtubeMob from '../../images/logoMob.png';

import './Logo.scss';

const Logo = () => {
  const screenWidth = useScreenWidth();
  console.log(screenWidth);
  return (
    <div className="logo">
      <img src={screenWidth > 500 ? youtube : youtubeMob} alt="logo" />
    </div>
  );
};

export default Logo;
