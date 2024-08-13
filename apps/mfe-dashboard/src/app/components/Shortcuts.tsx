import { useApi } from '@mfexample/shared';
import { fetchShortcuts } from '../services/shortcuts';
import { ShortcutDto } from '../types/ShortcutDto';
import styles from './styles.module.css';

export const Shortcuts = () => {
  const { data, isError, isLoading } = useApi<ShortcutDto[]>(fetchShortcuts);

  return (
    <div className={styles.borderBox}>
      <h3>Shortcuts</h3>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <ul>
        {data?.map((shortcut) => (
          <li key={shortcut.id}>{shortcut.name}</li>
        ))}
      </ul>
    </div>
  );
};
