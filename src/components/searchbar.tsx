'use client';

import { useSearch } from '@/hooks/use-search';
import { LoaderPinwheel, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { List } from './list';
import { Input } from './ui/input';

export function Searchbar() {
  const { replace } = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  const [debouncedQuery, setDebouncedQuery] = React.useState('');
  const [searchValue, setSearchValue] = React.useState(query || '');

  const { data, isFetching } = useSearch(debouncedQuery);

  const handleClear = () => {
    setSearchValue('');
    const params = new URLSearchParams(searchParams);
    params.delete('query');
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchValue);

      const params = new URLSearchParams(searchParams);

      if (!searchValue) {
        params.delete('query');
      } else {
        params.set('query', searchValue);
      }

      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname, replace, searchParams, searchValue]);

  return (
    <div className='gap-4 flex flex-col relative max-w-lg container mx-auto md:items-center md:justify-center'>
      <Link href='/' className='text-center flex flex-col gap-4 w-full'>
        <h1 className='text-2xl font-extrabold'>📺 Is The Show Finished?</h1>
      </Link>

      <div className='relative w-full'>
        <Input
          placeholder='Search a tv show...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className='mb-2 relative w-full'
        />
        {isFetching && (
          <LoaderPinwheel
            size={28}
            className='text-accent-foreground absolute text-xs  right-1 top-1 p-1 animate-spin'
          />
        )}
        {searchValue?.length > 0 && !isFetching && (
          <X
            size={28}
            className='p-1 rounded-full text-xs text-foreground cursor-pointer absolute top-1 right-1 hover:bg-accent duration-300 transition-all'
            onClick={handleClear}
          />
        )}
      </div>
      <List data={data || []} />
    </div>
  );
}
