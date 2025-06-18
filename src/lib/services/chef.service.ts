import { Chef } from "@/types";
import { BASE_API_URL, API_ROUTES } from "@/constans/Api.constans";

export const fetchChefById = async (id: string): Promise<Chef | null> => {
    try {
        const url = `${BASE_API_URL}${API_ROUTES.CHEFS}/${id}`;
        const res = await fetch(url);

        if (!res.ok) {
            console.error("Failed to fetch chef:", res.status);
            return null;
        }

        const json = await res.json();
        return json.data ?? null;
    } catch (error) {
        console.error("Error fetching chef by ID:", error);
        return null;
    }
};

export const fetchChefOfTheWeek = async (): Promise<Chef | null> => {
    try {
        const res = await fetch(`${BASE_API_URL}/chef/weekly`);

        if (!res.ok) {
            throw new Error("Failed to fetch chef of the week");
        }

        const json = await res.json();
        return json.data ?? null;
    } catch (error) {
        console.error("Error fetching chef of the week:", error);
        return null;
    }
};
