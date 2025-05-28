import { NextResponse } from "next/server";
import { restaurants } from "@/data/restaurants.data";
import { Restaurant, RestaurantFilter } from "@/types";

const filterStrategies: Record<RestaurantFilter, (restaurants: Restaurant[]) => Restaurant[]> = {
  [RestaurantFilter.ALL]: (restaurants) => restaurants,
  [RestaurantFilter.POPULAR]: (restaurants) => restaurants.filter((r) => r.isPopular),
  [RestaurantFilter.NEW]: (restaurants) => restaurants.filter((r) => r.isNew),
  [RestaurantFilter.OPEN]: (restaurants) => restaurants.filter((r) => r.isOpen),
};

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const filterParam = url.searchParams.get("filter");
    const filter = (filterParam as RestaurantFilter) || RestaurantFilter.ALL;

    const filteredRestaurants = filterStrategies[filter](restaurants);

    return NextResponse.json(filteredRestaurants);
  }catch (error) {
    console.error("Error fetching restaurants:", error);
    return NextResponse.json({ error: "Failed to fetch restaurants" }, { status: 500 });
  }

}