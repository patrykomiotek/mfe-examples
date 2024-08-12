import { Link } from 'react-router-dom';

export const SettingsEmail = () => {
  return (
    <div>
      <h1>Settings: Email</h1>
      <p>Change your e-mail here</p>
      <Link to="/">Back to settings</Link>
    </div>
  );
};
