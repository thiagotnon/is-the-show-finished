export default async function search(query: string) {
  if (!query) return [];

  const response = await fetch(`/api/search?query=${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }

  const data = await response.json();
  return data?.results || [];
}
