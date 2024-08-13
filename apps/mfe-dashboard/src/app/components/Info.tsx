import { useApi } from '@mfexample/shared';

import { fetchInfo } from '../services/info';
import { InfoDto } from '../types/InfoDto';
import styles from './styles.module.css';

export const Info = () => {
  const { data, isError, isLoading } = useApi<InfoDto>(fetchInfo);

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
      <h3>Info</h3>
      <p>{data?.message}</p>
    </div>
  );
};
