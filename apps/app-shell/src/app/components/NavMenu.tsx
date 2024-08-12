import { NavLink } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/accounts">Accounts</NavLink>
        </li>
      </ul>
    </nav>
  );
};
