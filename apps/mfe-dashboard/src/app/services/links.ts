import { LinkDto } from '../types/LinkDto';
import { CONFIG } from './config';

export const fetchLinks = (): Promise<LinkDto[]> => {
  return fetch(`${CONFIG.API_BASE_URL}/links`, {
    headers: CONFIG.HEADERS,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Invalid response');
  });
};
