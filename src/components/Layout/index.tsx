import { ReactChild } from 'react';
import Navbar from '../Navbar';
import './Layout.scss';

type Props = {
  children: ReactChild;
};

const Layout = ({ children }: Props) => (
  <div className="layout">
    <Navbar />
    <div className="layout__container">
      <div className="container">{children}</div>
    </div>
  </div>
);

export default Layout;
