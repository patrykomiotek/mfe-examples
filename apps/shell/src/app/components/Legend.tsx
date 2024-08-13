type Props = {
  label: string;
  color: string;
};

const LegendItem = ({ label, color }: Props) => {
  return (
    <div style={{ marginRight: 10 }}>
      <span
        style={{
          display: 'inline-block',
          backgroundColor: color,
          border: '#000 1px solid',
          width: 12,
          height: 12,
          marginRight: 6,
        }}
      ></span>{' '}
      <span>{label}</span>
    </div>
  );
};

export const Legend = () => {
  return (
    <div style={{ display: 'flex', marginTop: 12 }}>
      <LegendItem color="#EDEEF0" label="Shell" />
      <LegendItem color="#CEE1F7" label="Dashboard" />
      <LegendItem color="#F2CBCC" label="Accounts" />
      <LegendItem color="#DAF0D8" label="Payments" />
      <LegendItem color="#FEEAA7" label="Settings" />
    </div>
  );
};
