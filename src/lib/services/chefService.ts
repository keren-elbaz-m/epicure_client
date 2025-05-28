import { chefs } from "@/data/chefs.data";
export function getChefById(id: string) {
  return chefs.find(chef => chef.id === parseInt(id));
}