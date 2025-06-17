import { API_ROUTES } from "@/constans/Api.constans";
import { DISHES_BY_RESTAURANT } from "@/constans/Api.constans"; // or adjust path
import { Dish, DishTabLabel } from "@/types";

export const DishService = {
  async getDishesByRestaurant(restaurantId: number, tab: DishTabLabel): Promise<Dish[]> {
    const res = await fetch(
      `${API_ROUTES.BASE_URL}${DISHES_BY_RESTAURANT(restaurantId, tab)}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch dishes");
    }

    const dishes: Dish[] = await res.json();
    return dishes;
  }
};