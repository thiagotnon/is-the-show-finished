import search from '@/action/search';
import { useQuery } from '@tanstack/react-query';

export function useSearch(query: string) {
  const { isFetching, error, data } = useQuery({
    queryKey: ['search', query],
    queryFn: () => search(query),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: query.length > 0,
  });

  return { isFetching, error, data };
}
