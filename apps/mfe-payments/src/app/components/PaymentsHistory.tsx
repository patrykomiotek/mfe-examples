import { useApi } from '@mfexample/shared';
import { PaymentDto } from '../types/PaymentDto';
import { fetchPayments } from '../services/payments';

export const PaymentsHistory = () => {
  const { data, isError, isLoading } = useApi<PaymentDto[]>(fetchPayments);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div>
      <h1>Payments history</h1>
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
