import { NextResponse } from "next/server";
import { restaurants } from "@/data/restaurants.data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const restaurantId = Number(params.id);
  const restaurant = restaurants.find(r => r.id === restaurantId);

  if (!restaurant) {
    return NextResponse.json({ message: "Restaurant not found" }, { status: 404 });
  }

  return NextResponse.json(restaurant);
}