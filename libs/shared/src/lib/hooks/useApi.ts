import { useEffect, useState } from "react";

type S<T> =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // resolved
      data: T;
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

export const useApi = <T>(fetcher: () => Promise<T>) => {
  const [state, setState] = useState<S<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });
  const { data, isLoading, isError } = state;

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetcher();
        console.log({ data });
        setState({
          data,
          isLoading: false,
          isError: false,
        });
      } catch {
        setState({
          data: undefined,
          isLoading: false,
          isError: true,
        });
      }
    };

    loadData();
  }, []);

  return { data, isLoading, isError };
};
