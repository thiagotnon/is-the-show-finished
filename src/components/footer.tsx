import Link from 'next/link';

export function Footer({ show }: { show: string }) {
  return (
    <footer className='container max-w-2xl mx-auto text-xs text-center p-4'>
      <p>
        The page <strong>{`${show} Finished?`} </strong> was generated using data from{' '}
        <Link href='https://www.themoviedb.org/' target='_blank' rel='noopener'>
          TMDB
        </Link>
        . <br />
        If you notice any inaccuracies, please{' '}
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSc1f5j5strLFRX1InunlB3Q83WTIaqZZnTN2b8i8DKtwFcVaA/viewform?usp=header'>
          let us know here
        </a>
        .
      </p>
      <nav>
        <Link href='/credits'>Credits</Link> | <Link href='/privacy-policy'>Privacy Policy</Link> |{' '}
        <Link href='/legal-notice'>Legal Notice</Link>
      </nav>
    </footer>
  );
}
