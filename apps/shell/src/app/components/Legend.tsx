export const Legend = () => {
  return (
    <div style={{ display: 'flex', marginTop: 12 }}>
      <div style={{ marginRight: 10 }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#CEE1F7',
            width: 12,
            height: 12,
            marginRight: 6,
          }}
        ></span>{' '}
        <span>Dashboard</span>
      </div>
      <div style={{ marginRight: 10 }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#F2CBCC',
            width: 12,
            height: 12,
            marginRight: 6,
          }}
        ></span>{' '}
        <span>Accounts</span>
      </div>
      <div style={{ marginRight: 10 }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#DAF0D8',
            width: 12,
            height: 12,
            marginRight: 6,
          }}
        ></span>{' '}
        <span>Payments</span>
      </div>
      <div>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#FEEAA7',
            width: 12,
            height: 12,
            marginRight: 6,
          }}
        ></span>{' '}
        <span>Settings</span>
      </div>
    </div>
  );
};
