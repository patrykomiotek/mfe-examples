import { useApi } from '@mfexample/shared';
import { fetchShortcuts } from '../services/shortcuts';
import { ShortcutDto } from '../types/ShortcutDto';
import styles from './styles.module.css';

export const Shortcuts = () => {
  const { data, isError, isLoading } = useApi<ShortcutDto[]>(fetchShortcuts);

  if (isLoading) {
    return (
      <div className={styles.borderBox}>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.borderBox}>
        <p>Error</p>
      </div>
    );
  }

  return (
    <div className={styles.borderBox}>
      <h3>Shortcuts</h3>
      <ul>
        {data?.map((shortcut) => (
          <li key={shortcut.id}>{shortcut.name}</li>
        ))}
      </ul>
    </div>
  );
};
