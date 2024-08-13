import { useApi } from '@mfexample/shared';
import { PaymentDto } from '../types/PaymentDto';
import { fetchPayments } from '../services/payments';

import styles from './styles.module.css';

const PaymentsHistory = () => {
  const { data, isError, isLoading } = useApi<PaymentDto[]>(fetchPayments);

  return (
    <div className={styles.paymentsContainer}>
      <h1>Payments history</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <div>
        {data?.map((payment) => (
          <div key={payment.id} className={styles.paymentTile}>
            <p className={styles.paymentTitle}>
              {payment.amount} PLN, {payment.date}
            </p>
            <p className={styles.paymentDetails}>{payment.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentsHistory;
