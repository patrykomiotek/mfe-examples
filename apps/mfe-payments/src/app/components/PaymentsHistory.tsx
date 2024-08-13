import { useApi } from '@mfexample/shared';
import { PaymentDto } from '../types/PaymentDto';
import { fetchPayments } from '../services/payments';

import styles from './styles.module.css';

export const PaymentsHistory = () => {
  const { data, isError, isLoading } = useApi<PaymentDto[]>(fetchPayments);

  return (
    <div className={styles.paymentsContainer}>
      <h1>Payments history</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <ul>
        {data?.map((payment) => (
          <li key={payment.id}>
            #{payment.id}. {payment.amount} PLN, {payment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};
