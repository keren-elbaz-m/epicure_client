export async function getDataFromApi<T>(apiUrl: string): Promise<T[]> {
    const res = await fetch(apiUrl);
  
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${apiUrl}: ${res.status}`);
    }
  
    const data: T[] = await res.json();
    return data;
  }