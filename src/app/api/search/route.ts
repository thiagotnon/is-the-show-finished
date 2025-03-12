import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('query');

  const url = `${process.env.TMDB_API_BASE_URL}/search/tv?query=${query}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
  });
  const data = await response.json();

  return NextResponse.json(data);
}
