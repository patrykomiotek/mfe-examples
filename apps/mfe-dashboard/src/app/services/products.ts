import { ProductDto } from '../types/ProductDto';
import { CONFIG } from './config';

export const fetchProducts = (): Promise<ProductDto[]> => {
  return fetch(`${CONFIG.API_BASE_URL}/products`, {
    headers: CONFIG.HEADERS,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Invalid response');
  });
};
