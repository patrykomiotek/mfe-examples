import { AccountDto } from '../types/AccountDto';
import { CONFIG } from './config';

export const fetchAccounts = (): Promise<AccountDto[]> => {
  return fetch(`${CONFIG.API_BASE_URL}/accounts`, {
    headers: CONFIG.HEADERS,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Invalid response');
  });
};
