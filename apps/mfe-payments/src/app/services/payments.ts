import { PaymentDto } from '../types/PaymentDto';
import { CONFIG } from './config';

export const fetchPayments = (): Promise<PaymentDto[]> => {
  return fetch(`${CONFIG.API_BASE_URL}/payments`, {
    headers: CONFIG.HEADERS,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Invalid response');
  });
};
