
import React, { Component }  from 'react';
import {Outlet, Link} from "react-router-dom";

const Layout = () => {
  return(
    <>
      <nav>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link to="/">Home</Link>  </li>
          <li class="nav-item">
            <Link to="/contact">Contact</Link>  </li>
          <li class="nav-item">
            <Link to="/comp">Component</Link>  </li>
          
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
