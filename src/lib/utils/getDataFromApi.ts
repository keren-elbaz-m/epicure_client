import { API_ROUTES } from "@/constans/Api.constans";

export async function getDataFromApi<T>(route:string): Promise<T[]> {
  const url = `${API_ROUTES.BASE_URL}${route}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}: ${res.status}`);
  }

  const data: T[] = await res.json();
  return data;
}