import styles from './styles.module.css';

export const Products = () => {
  return (
    <div className={styles.borderBox}>
      <h3>Products</h3>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
};
