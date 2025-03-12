import { Searchbar } from '@/components/searchbar';

export default function Home() {
  return (
    <main className='max-h-24 md:min-w-lg  flex flex-col gap-4 justify-between items-center'>
      <h1 className='text-4xl font-extrabold '>Is The Show Finished?</h1>
      <Searchbar />
    </main>
  );
}
