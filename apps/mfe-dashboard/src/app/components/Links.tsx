import { useApi } from '@mfexample/shared';

import { LinkDto } from '../types/LinkDto';
import { fetchLinks } from '../services/links';
import styles from './styles.module.css';

export const Links = () => {
  const { data, isError, isLoading } = useApi<LinkDto[]>(fetchLinks);

  return (
    <div className={styles.borderBox}>
      <h3>Links</h3>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <ul>
        {data?.map((link) => (
          <li key={link.id}>{link.name}</li>
        ))}
      </ul>
    </div>
  );
};
