import { Searchbar } from '@/components/searchbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <div className='container mx-auto max-w-4xl px-4 md:items-center md:justify-center flex pt-14'>
        <Suspense>
          <Searchbar />
        </Suspense>
      </div>
      <div className='container mx-auto max-w-4xl p-4 md:items-center md:justify-center flex pt-14 md:pt-0'>
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className='text-3xl'>Privacy Policy and Cookies Notice</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className='font-bold text-2xl'>1. Data Collection</h2>

            <h3 className='text-lg mb-2 font-bold'>Personal Data</h3>
            <p className='my-4'>
              We do <strong>not</strong> collect personal data without your explicit consent.
              Additionally, we do not sell, rent, or share any personal information with third
              parties.
            </p>

            <h3 className='text-lg mb-2'>Cookies and Tracking Technologies</h3>
            <p className='my-4'>
              We use <strong>Google Analytics</strong> to track general usage patterns and improve
              our services. Google Analytics collects anonymous data, including:
            </p>
            <ul className='list-disc list-inside'>
              <li>Pages visited</li>
              <li>Session duration</li>
              <li>Browser and device type</li>
              <li>General location (anonymized IP)</li>
            </ul>
            <p className='my-4'>
              Google Analytics may use cookies for tracking. You can manage or disable these cookies
              via your browser settings.
            </p>
            <p className='my-4'>For more details, refer to:</p>
            <ul className='list-disc list-inside'>
              <li>
                <a href='https://policies.google.com/privacy' target='_blank' rel='noopener'>
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='https://support.google.com/analytics/answer/6004245?hl=en'
                  target='_blank'
                  rel='noopener'
                >
                  Google Analytics Data Usage
                </a>
              </li>
            </ul>

            <h2 className='font-bold text-2xl'>2. Third-Party Links</h2>
            <p className='my-4'>
              Our website may contain links to third-party services such as{' '}
              <a href='https://www.themoviedb.org/' target='_blank' rel='noopener'>
                TMDB
              </a>
              . We are not responsible for their privacy policies. You can manage cookies from your
              browser settings.
            </p>

            <h2 className='font-bold text-2xl'>3. Contact</h2>
            <p className='my-4'>
              For inquiries, please reach out via our{' '}
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSc1f5j5strLFRX1InunlB3Q83WTIaqZZnTN2b8i8DKtwFcVaA/viewform?usp=header'>
                contact form
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
