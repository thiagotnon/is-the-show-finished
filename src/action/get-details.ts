import { headers } from 'next/headers';

type TShowDetailsProps = {
  poster_path: string;
  original_name: string;
  name: string;
  status: string;
  seasons: {
    id: string;
    poster_path: string;
    original_name: string;
    name: string;
    air_date: string;
    overview: string;
  }[];
};

export default async function getDetails(id: string): Promise<TShowDetailsProps | null> {
  if (!id) return null;

  const host = (await headers()).get('host'); // Exemplo: "localhost:3000"
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const url = `${protocol}://${host}/api/show/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }

  const data = await response.json();

  return data;
}
