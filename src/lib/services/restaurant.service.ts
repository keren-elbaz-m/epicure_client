import { BASE_API_URL, API_ROUTES } from "@/constans/Api.constans";
import { Restaurant } from "@/types";

export const fetchRestaurants = async (queryParams?: { query?: string }) => {
    try {
        const endpoint = `${BASE_API_URL}${API_ROUTES.RESTAURANTS}`;

        console.log(queryParams);
        const shouldFilter =
            queryParams?.query &&
            queryParams.query !== "" &&
            queryParams.query !== "all";

        const url = shouldFilter
            ? `${endpoint}?filter=${queryParams.query}`
            : endpoint;

        const res = await fetch(url);
        const apiResponse = await res.json();
        const restaurantsArray = Array.isArray(apiResponse.data)
            ? apiResponse.data
            : [];
        console.log("Fetched data:", restaurantsArray);
        return restaurantsArray;
    } catch (error) {
        console.error("Error fetching restaurants", error);
        return { data: [] };
    }
};

export const fetchRestaurantById = async (
    id: string
): Promise<Restaurant | null> => {
    try {
        const url = `${BASE_API_URL}${API_ROUTES.RESTAURANTS}/${id}`;
        const res = await fetch(url);

        if (!res.ok) {
            console.error("Failed to fetch restaurant:", res.status);
            return null;
        }

        const json = await res.json();

        if (json.success && json.data) {
            return json.data as Restaurant;
        }

        return null;
    } catch (error) {
        console.error("Error fetching restaurant by ID:", error);
        return null;
    }
};
