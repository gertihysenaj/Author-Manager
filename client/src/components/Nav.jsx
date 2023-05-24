import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1>Favourite Author</h1>
        {location.pathname === "/" ? <Link to="/create">Add Author</Link> : <Link to="/">Go Home</Link>}
      </div>
    </nav>
  );
};

export default Nav;
