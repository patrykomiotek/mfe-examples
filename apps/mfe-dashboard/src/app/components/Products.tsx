import { useApi } from '@mfexample/shared';

import styles from './styles.module.css';
import { ProductDto } from '../types/ProductDto';
import { fetchProducts } from '../services/products';

export const Products = () => {
  const { data, isError, isLoading } = useApi<ProductDto[]>(fetchProducts);

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
      <h3>Products</h3>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
