export declare const useApi: <T>(fetcher: () => Promise<T>) => {
    data: T | undefined;
    isLoading: boolean;
    isError: boolean;
};
