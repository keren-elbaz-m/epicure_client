import { NextResponse } from "next/server";
import { restaurants } from "@/data/restaurants.data";
import { RestaurantFilter } from "@/types";

export async function GET(request: Request) {
  try
  {
    const url = new URL(request.url);
    const filter = url.searchParams.get("filter");

    if (!filter || filter === RestaurantFilter.ALL) {
      return NextResponse.json(restaurants);
    }

    let filtered = restaurants;

    switch (filter) {
      case RestaurantFilter.POPULAR:
        filtered = restaurants.filter((r) => r.isPopular);
        break;
      case RestaurantFilter.NEW:
        filtered = restaurants.filter((r) => r.isNew);
        break;
      case RestaurantFilter.OPEN:
        filtered = restaurants.filter((r) => r.isOpen);
        break;
      default:
        filtered=[];
        break;
    }
    return NextResponse.json(filtered);
  }catch (error) {
    console.error("Error fetching restaurants:", error);
    return NextResponse.json({ error: "Failed to fetch restaurants" }, { status: 500 });
  }

}