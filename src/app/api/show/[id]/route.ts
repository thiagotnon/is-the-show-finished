import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const url = `${process.env.TMDB_API_BASE_URL}/tv/${id}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
  });
  const data = await response.json();

  return NextResponse.json(data);
}
