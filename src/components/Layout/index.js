import './index.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => (
   <div>
      <header>
         <Header />
      </header>
      <Outlet />
   </div>
);

export default Layout;
