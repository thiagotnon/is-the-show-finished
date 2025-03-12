import { TSearchProps } from '@/action/search';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollArea } from './ui/scroll-area';

export function List({ data }: { data: TSearchProps[] }) {
  if (!data || data?.length === 0) return null;

  return (
    <ScrollArea className='!absolute top-24 border rounded-lg drop-shadow-2xl max-h-64  max-w-lg overflow-y-auto z-50 bg-popover p-2 right-0 left-0'>
      <ul>
        {data?.map((show) => (
          <li key={show.id} className='hover:bg-secondary rounded p-2 transition-all animate-in'>
            <Link
              href={`/show/${show.id}`}
              className='flex w-full justify-center flex-col items-start'
              replace
            >
              <div className='flex items-center space-x-2'>
                {show.poster_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                    width={40}
                    height={40}
                    alt={show.original_name}
                    className='rounded-sm aspect-[12/18] object-cover drop-shadow-sm'
                  />
                ) : (
                  <div className='w-10 aspect-[12/18] bg-gray-300 rounded-sm' />
                )}

                <div className='flex flex-col'>
                  <span>{show.name}</span>
                  <span className='text-xs text-muted-foreground'>{show.original_name}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
