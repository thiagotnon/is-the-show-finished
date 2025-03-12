import { Searchbar } from '@/components/searchbar';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className='container mx-auto max-w-4xl px-4 h-screen md:items-center md:justify-center flex pt-14 md:pt-0'>
      <Suspense>
        <Searchbar />
      </Suspense>
    </div>
  );
}
