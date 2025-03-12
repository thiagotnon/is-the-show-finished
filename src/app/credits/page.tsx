import { Searchbar } from '@/components/searchbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <div className='container mx-auto max-w-4xl px-4 md:items-center md:justify-center flex pt-14'>
        <Suspense>
          <Searchbar />
        </Suspense>
      </div>
      <div className='container mx-auto max-w-4xl p-4  md:items-center md:justify-center flex pt-14 md:pt-0'>
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className='text-3xl'>Credits</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='my-2'>
              IsTheShowFinished is a project created to help users check the status of TV shows.
            </p>

            <h2 className='font-bold text-2xl'>Data Sources</h2>
            <p className='my-2'>
              All show-related information displayed on this site is sourced from{' '}
              <Link href='https://www.themoviedb.org/' target='_blank' rel='noopener'>
                The Movie Database (TMDB)
              </Link>
              . This site is not affiliated with or endorsed by TMDB.
            </p>

            <h2 className='font-bold text-2xl'>Open-Source Libraries</h2>
            <p className='my-2'>
              This project uses various open-source libraries and frameworks. We would like to
              acknowledge the following:
            </p>

            <h2 className='font-bold text-2xl'>Contact</h2>
            <p className='my-2'>
              If you have any questions or concerns, please reach out via our{' '}
              <Link href='https://docs.google.com/forms/d/e/1FAIpQLSc1f5j5strLFRX1InunlB3Q83WTIaqZZnTN2b8i8DKtwFcVaA/viewform?usp=header'>
                contact form
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
