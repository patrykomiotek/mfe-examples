import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { useApi } from '@mfexample/shared';
import { AccountDto } from '../types/AccountDto';
import { fetchAccounts } from '../services/accounts';

import styles from './styles.module.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// it's a workaround to keep same client for host app and remote app
// inside module federation configuration there is @tanstack/react-query configured as singleton between host and remote
declare global {
  interface Window {
    REACT_QUERY_CLIENT: QueryClient;
  }
}

// TODO: there is duplication between host client creation and remote - we cen move it to shared library
window.REACT_QUERY_CLIENT =
  window.REACT_QUERY_CLIENT ||
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

const AccountList = () => {
  // const { data, isError, isLoading } = useApi<AccountDto[]>(fetchAccounts);
  const { data, isError, isLoading } = useQuery<AccountDto[]>({
    queryKey: ['accounts'],
    queryFn: fetchAccounts,
  });

  return (
    <div className={styles.accountsContainer}>
      <h1>Accounts list</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <ul>
        {data?.map((account) => (
          <li key={account.id}>{account.value}</li>
        ))}
      </ul>
    </div>
  );
};

const AccountsProvider = () => {
  return (
    <QueryClientProvider client={window.REACT_QUERY_CLIENT}>
      <AccountList />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default AccountsProvider;
