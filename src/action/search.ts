export type TSearchProps = {
  id: string;
  poster_path: string;
  original_name: string;
  name: string;
};

export default async function search(query: string): Promise<TSearchProps[]> {
  if (!query) return [];

  const response = await fetch(`/api/search?query=${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }

  const data = await response.json();
  return data?.results || [];
}
