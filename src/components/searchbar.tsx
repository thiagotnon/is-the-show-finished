'use client';

import { useSearch } from '@/hooks/use-search';
import { LoaderPinwheel, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import AdBanner from './ad-banner';
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
    <>
      <div className='relative flex flex-col md:justify-center md:items-center gap-4 mx-auto max-w-lg container'>
        <Link
          href='/'
          className='flex flex-col gap-4 bg-transparent w-full text-center no-underline'
        >
          <h1 className='font-extrabold text-2xl'>📺 Is The Show Finished?</h1>
        </Link>

        <div className='relative w-full'>
          <Input
            placeholder='Search a tv show...'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='relative mb-2 w-full'
          />
          {isFetching && (
            <LoaderPinwheel
              size={28}
              className='top-1 right-1 absolute p-1 text-xs animate-spin text-accent-foreground'
            />
          )}
          {searchValue?.length > 0 && !isFetching && (
            <X
              size={28}
              className='top-1 right-1 absolute hover:bg-accent p-1 rounded-full text-foreground text-xs transition-all duration-300 cursor-pointer'
              onClick={handleClear}
            />
          )}
        </div>
        <List data={data || []} />
      </div>
      <AdBanner dataAdFormat='auto' dataAdSlot='8844332142' dataFullWidthResponsive />
    </>
  );
}
