import { ShortcutDto } from '../types/ShortcutDto';
import { CONFIG } from './config';

export const fetchShortcuts = (): Promise<ShortcutDto[]> => {
  return fetch(`${CONFIG.API_BASE_URL}/shortcuts`, {
    headers: CONFIG.HEADERS,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Invalid response');
  });
};
