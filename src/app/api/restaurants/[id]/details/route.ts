import { NextResponse } from "next/server";
import { restaurants } from "@/data/restaurants.data";
import { dishes } from "@/data/dishes.data";

export async function GET(request: Request, context: { params: { id: string } }) {
  try{

  
    const { id } = context.params;
    const restaurantId = Number(id);
    const restaurant = restaurants.find(r => r.id === restaurantId);

    if (!restaurant) {
       return NextResponse.json({ message: "Restaurant not found" }, { status: 404 });
    }

    const restaurantDishes = dishes.filter(d => restaurant.dishIds.includes(d.id));

  return NextResponse.json({
    restaurant,
    dishes: restaurantDishes,
  });
  }catch(error){
    console.error("Unexpected error in GET /api/restaurant/[id]/details:", error);
    return NextResponse.json({error: "Internal server error"}, {status:500});
  }
}