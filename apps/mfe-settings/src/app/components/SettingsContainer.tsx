import { Link } from 'react-router-dom';

export const SettingsContainer = () => {
  return (
    <div>
      <h1>Settings</h1>
      <ul>
        <li>
          <Link to="address">Address</Link>
        </li>
        <li>
          <Link to="email">E-mail</Link>
        </li>
      </ul>
    </div>
  );
};
