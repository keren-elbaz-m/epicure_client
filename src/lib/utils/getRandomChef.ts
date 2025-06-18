import { API_ROUTES, BASE_API_URL } from "@/constans/Api.constans";
import { Chef } from "@/types";

export const getRandomChef = async (): Promise<string | null> => {
    try {
        const res = await fetch(`${BASE_API_URL}${API_ROUTES.CHEFS}`);

        if (!res.ok) {
            console.error("Failed to fetch chefs:", res.status);
            return null;
        }

        const json = await res.json();
        const chefs: Chef[] = json.data ?? [];

        if (chefs.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * chefs.length);
        return chefs[randomIndex]._id;
    } catch (error) {
        console.error("Error fetching chefs:", error);
        return null;
    }
};
