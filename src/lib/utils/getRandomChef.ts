import { API_ROUTES } from "@/constans/Api.constans";
import { getDataFromApi } from "@/lib/utils/getDataFromApi";

export async function getRandomChef(): Promise<number | null> {
  try {
    const dataChefs = await getDataFromApi(API_ROUTES.CHEFS);
    if (!Array.isArray(dataChefs) || dataChefs.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * dataChefs.length);
    return (dataChefs[randomIndex] as { id: number }).id;
  } catch (error) {
    console.error('Error f etching chefs:', error);
    return null;
  }
}
