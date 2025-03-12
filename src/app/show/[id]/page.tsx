import getDetails from '@/action/get-details';
import { Footer } from '@/components/footer';
import { Searchbar } from '@/components/searchbar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dot, Popcorn } from 'lucide-react';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getDetails(id);

  return (
    <>
      <div className='container mx-auto max-w-4xl px-4 md:items-center md:justify-center flex pt-14'>
        <Suspense>
          <Searchbar />
        </Suspense>
      </div>

      <div className='grid grid-cols-12 p-4 gap-4 relative container mx-auto max-w-4xl'>
        <div className='col-span-12 md:col-span-3 flex flex-col items-center gap-4'>
          <div className='sticky top-4 flex flex-col gap-2 items-center justify-center'>
            <div className='flex items-center justify-center relative'>
              <div className='flex items-center justify-center flex-col w-full'>
                {data?.poster_path ? (
                  <>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                      width={1000}
                      height={1000}
                      alt={data?.original_name || ''}
                      className='rounded-lg md:rounded-t-md drop-shadow-2xl w-60 md:w-full'
                    />
                    <Badge
                      variant={badgeColor(data?.status || '')}
                      className='shadow text-sm -mt-10 z-10'
                    >
                      {data?.status}
                    </Badge>
                  </>
                ) : (
                  <Badge variant={badgeColor(data?.status || '')} className='shadow text-sm'>
                    {data?.status}
                  </Badge>
                )}
              </div>
            </div>

            <div className='text-center md:text-left w-full mt-4'>
              <h1 className='text-lg font-bold'>{data?.original_name}</h1>
              <p className='text-muted-foreground text-sm'>{data?.name}</p>
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-9'>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl'>Watching order</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                {data?.seasons
                  ?.filter((season) => season.name !== 'Specials')
                  .map((season) => (
                    <li
                      key={season?.id}
                      className='gap-4 grid grid-cols-12 border-b pb-4 items-start justify-start'
                    >
                      {season.poster_path ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
                          width={1000}
                          height={1000}
                          alt={season.original_name || ''}
                          className='rounded-sm w-full h-fit object-cover drop-shadow-sm col-span-4 md:col-span-2 mt-4 md:mt-0'
                        />
                      ) : (
                        <div className='rounded-sm w-full h-full aspect-[3/4] object-cover drop-shadow-sm col-span-4 md:col-span-2 mt-4 md:mt-0 bg-muted flex items-center justify-center'>
                          <Popcorn className='w-14 md:w-10 h-14  md:h-10 text-muted-foreground' />
                        </div>
                      )}
                      <div className='flex flex-col col-span-12 md:col-span-10'>
                        <h3 className='font-bold flex items-center gap-0.5'>
                          {season?.name}
                          <Dot />
                          <span className=' font-normal text-sm'>
                            {dateFormat(season?.air_date)}
                          </span>
                        </h3>

                        <p className='text-sm text-muted-foreground'>{season?.overview}</p>
                      </div>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer show={data?.original_name || ''} />
    </>
  );
}

function badgeColor(status: string) {
  switch (status) {
    case 'Canceled':
      return 'destructive';
    case 'Returning Series':
      return 'tertiary';
    case 'Ended':
      return 'success';
    default:
      return 'default';
  }
}
function dateFormat(date: string) {
  if (!date) return 'No release date';
  return Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(new Date(date));
}
