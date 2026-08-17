import React from 'react';
import style from './MainNavigator.module.css';
import { NavLink } from 'react-router';

const MainNavigator = () => {
  return (
    <nav className={style.main_navigator}>
      <ul className={style.main_navigator_list}>
        <li>
          <NavLink to="/exercises" className={({ isActive }) => (isActive ? style.active : undefined)} end>
            Exercises
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? style.active : undefined)} end to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? style.active : undefined)} end to="/history">
            History
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? style.active : undefined)} end to="/goals">
            Goals
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigator;
