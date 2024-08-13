import { InfoDto } from '../types/InfoDto';
import { CONFIG } from './config';

export const fetchInfo = (): Promise<InfoDto> => {
  return fetch(`${CONFIG.API_BASE_URL}/info`, {
    headers: CONFIG.HEADERS,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Invalid response');
  });
};
