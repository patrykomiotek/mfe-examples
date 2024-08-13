import { useApi } from '@mfexample/shared';
import { AccountDto } from '../types/AccountDto';
import { fetchAccounts } from '../services/accounts';

const AccountList = () => {
  const { data, isError, isLoading } = useApi<AccountDto[]>(fetchAccounts);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div>
      <h1>Accounts list</h1>
      <ul>
        {data?.map((account) => (
          <li key={account.id}>{account.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
