'use client';

import { useSearch } from '@/hooks/use-search';
import { LoaderPinwheel } from 'lucide-react';
import React from 'react';
import { List } from './list';
import { Input } from './ui/input';

export function Searchbar() {
  const [debouncedQuery, setDebouncedQuery] = React.useState('');
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms de debounce

    return () => clearTimeout(timeout);
  }, [query]);

  const { data, isFetching } = useSearch(debouncedQuery);

  return (
    <div className='relative w-full'>
      <div className='relative'>
        <Input
          placeholder='Search a tv show...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='mb-2 relative'
        />
        {isFetching && (
          <LoaderPinwheel className='text-accent-foreground absolute right-2 top-1.5 animate-spin' />
        )}
      </div>
      <List data={data} />
    </div>
  );
}
