import Image from 'next/image';
import Link from 'next/link';
import { ScrollArea } from './ui/scroll-area';

type TListProps = {
  id: string;
  poster_path: string;
  original_name: string;
  name: string;
};
export function List({ data }: { data: TListProps[] }) {
  if (!data || data?.length === 0) return null;

  return (
    <ScrollArea className='rounded-md border absolute left-0 max-h-60 top-1 overflow-auto drop-shadow-ßlg p-1'>
      <ul>
        {data?.map((show) => (
          <li key={show.id}>
            <Link
              href={`/show/${show.id}`}
              className='flex w-full justify-center flex-col items-start hover:bg-secondary rounded-md p-2 transition-all animate-in'
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
                  <span className='text-sm'>{show.original_name}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
