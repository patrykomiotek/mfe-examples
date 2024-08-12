import { Link } from 'react-router-dom';

export const SettingsAddress = () => {
  return (
    <div>
      <h1>Settings: Address</h1>
      <p>Change your address here</p>
      <Link to="/">Back to settings</Link>
    </div>
  );
};
