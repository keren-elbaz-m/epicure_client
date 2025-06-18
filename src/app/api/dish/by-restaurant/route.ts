import { NextResponse } from "next/server";
import { dishes } from "@/data/dishes.data";
import { restaurants } from "@/data/restaurants.data";
import { DishTabLabel,TabLabelToDishFilterMap } from "@/types";

export async function GET(request: Request) {
    try{
        const { searchParams } = new URL(request.url);
        const restaurantId = searchParams.get("restaurantId");
        const type = searchParams.get("type") as DishTabLabel;
        const menuKey = TabLabelToDishFilterMap[type];

        if (!restaurantId || !type) {
            return NextResponse.json({ error: "Missing restaurantId or type" }, { status: 400 });
        }

        const restaurant = restaurants.find(r => String(r.id) === restaurantId);
        if (!restaurant) {
            return NextResponse.json({ error: "Restaurant not found" }, { status: 404 });
        }

        const ids = restaurant.dishIds;

        const relevantDishes = dishes.filter(d => ids.includes(d.id));

        const filtered = relevantDishes.filter(d => {
            return restaurant.menu[menuKey]?.some((dishId: number) => dishId === d.id);
        });

        return NextResponse.json(filtered);
    }catch(error){
        console.error("Unexpected error in GET handler:", error);
        return NextResponse.json({error: "Internal Server Error"}, {status:500});
    }
}