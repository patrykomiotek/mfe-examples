import { useApi } from '@mfexample/shared';

import styles from './styles.module.css';
import { ProductDto } from '../types/ProductDto';
import { fetchProducts } from '../services/products';

export const Products = () => {
  const { data, isError, isLoading } = useApi<ProductDto[]>(fetchProducts);

  return (
    <div className={styles.borderBox}>
      <h3>Products</h3>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
