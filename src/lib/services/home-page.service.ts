import { fetchRestaurants } from "@/lib/services/restaurant.service";
import { fetchDishes } from "@/lib/services/dish.service";
import { fetchChefOfTheWeek } from "@/lib/services/chef.service";
import { Restaurant, Dish, Chef } from "@/types";

export const getHomePageData = async (): Promise<{
    restaurantData: Restaurant[];
    dishData: Dish[];
    chefData: Chef | null;
}> => {
    try {
        const [restaurantData, dishData, chefData] = await Promise.all([
            fetchRestaurants(),
            fetchDishes(),
            fetchChefOfTheWeek(),
        ]);

        return { restaurantData, dishData, chefData };
    } catch (error) {
        console.error("Error fetching homepage data:", error);
        return { restaurantData: [], dishData: [], chefData: null };
    }
};
