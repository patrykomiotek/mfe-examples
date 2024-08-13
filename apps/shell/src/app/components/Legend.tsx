import styles from './styles.module.css';

type Props = {
  label: string;
  color: string;
};

const LegendItem = ({ label, color }: Props) => {
  return (
    <div style={{ marginRight: 10 }}>
      <span
        className={styles.legendItemContainer}
        style={{
          backgroundColor: color,
        }}
      ></span>{' '}
      <span>{label}</span>
    </div>
  );
};

export const Legend = () => {
  return (
    <div className={styles.legendContainer}>
      <LegendItem color="#EDEEF0" label="Shell" />
      <LegendItem color="#CEE1F7" label="Dashboard" />
      <LegendItem color="#F2CBCC" label="Accounts" />
      <LegendItem color="#DAF0D8" label="Payments" />
      <LegendItem color="#FEEAA7" label="Settings" />
    </div>
  );
};
