import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';

const Layout = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">User Management</h1>
      </header>
      <nav className="nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => clsx("nav-link", isActive && "active")}
          end
        >
          User List
        </NavLink>
        <NavLink 
          to="/add" 
          className={({ isActive }) => clsx("nav-link", isActive && "active")}
        >
          Add User
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
