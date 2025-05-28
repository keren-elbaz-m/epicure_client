import { restaurants } from "@/data/restaurants.data";

export function getRestaurantsByIds(ids: string[]) {
  const numericIds = ids.map(id => parseInt(id));
  return restaurants.filter(rest => numericIds.includes(rest.id));
}