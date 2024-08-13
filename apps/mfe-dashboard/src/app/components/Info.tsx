import { useApi } from '@mfexample/shared';

import { fetchInfo } from '../services/info';
import { InfoDto } from '../types/InfoDto';
import styles from './styles.module.css';

export const Info = () => {
  const { data, isError, isLoading } = useApi<InfoDto>(fetchInfo);

  return (
    <div className={styles.borderBox}>
      <h3>Info</h3>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <p>{data?.message}</p>
    </div>
  );
};
