import { API_ROUTES, DISHES_BY_RESTAURANT } from "@/constans/Api.constans";
import { Dish, DishTabLabel, DishFilter } from "@/types";
import { BASE_API_URL } from "@/constans/Api.constans";

export const fetchDishesByRestaurant = async (
    restaurantId: string,
    type?: DishFilter
): Promise<Dish[]> => {
    const url = type
        ? `${BASE_API_URL}/restaurants/${restaurantId}/dishes?type=${type}`
        : `${BASE_API_URL}/restaurants/${restaurantId}/dishes`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch dishes");
    }

    const json = await res.json();

    return json.data?.menu?.[type ?? "breakfast"] ?? [];
};

export const DishService = {
    fetchDishesByRestaurant,
};
