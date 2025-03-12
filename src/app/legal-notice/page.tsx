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
              <h1 className='text-3xl'>Legal Notice</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className='font-bold text-2xl'>1. General Information</h2>
            <p className='my-2'>
              IsTheShowFinished is an independent project that provides information about TV series
              status based on publicly available data.
            </p>

            <h2 className='font-bold text-2xl'>2. Disclaimer of Liability</h2>
            <p className='my-2'>
              We do not guarantee the accuracy or completeness of the information provided. The data
              displayed is sourced from{' '}
              <Link href='https://www.themoviedb.org/' target='_blank' rel='noopener'>
                TMDB
              </Link>{' '}
              and is subject to changes beyond our control.
            </p>
            <p className='my-2'>
              IsTheShowFinished is not responsible for any direct, indirect, incidental, or
              consequential damages resulting from the use of this site.
            </p>

            <h2 className='font-bold text-2xl'>3. Intellectual Property</h2>
            <p className='my-2'>
              This site does not own or claim any rights to the content provided by third parties
              such as TMDB. All trademarks and copyrights belong to their respective owners.
            </p>

            <h2 className='font-bold text-2xl'>4. External Links</h2>
            <p className='my-2'>
              This site may contain links to third-party websites. We are not responsible for the
              content, privacy policies, or practices of these external sites.
            </p>

            <h2 className='font-bold text-2xl'>5. Changes to this Notice</h2>
            <p className='my-2'>
              We reserve the right to modify this legal notice at any time. Any changes will be
              posted on this page.
            </p>

            <h2 className='font-bold text-2xl'>6. Contact</h2>
            <p className='my-2'>
              If you have legal concerns, please contact us via our{' '}
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
