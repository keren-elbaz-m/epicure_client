import { API_ROUTES, DISHES_BY_RESTAURANT } from "@/constans/Api.constans";
import { Dish, DishTabLabel } from "@/types";

async function getDishesByRestaurant(restaurantId: string, tab: DishTabLabel):Promise<Dish[]>{
    const res = await fetch(
        `${API_ROUTES.BASE_URL}${DISHES_BY_RESTAURANT(restaurantId,tab)}`, {cache:"no-store"}
    );

    if(!res.ok){
        throw new Error("Faild to fetch dishes");
    }
    const dishes = await res.json() as Dish[];        
    return dishes;
}

export const DishService = {
    getDishesByRestaurant
};