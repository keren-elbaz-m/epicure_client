import { NextResponse } from "next/server";
import { chefs } from "@/data/chefs.data";
import { restaurants } from "@/data/restaurants.data"; 

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const chefId = Number(params.id);

  const chef = chefs.find(c => c.id === chefId);
  if (!chef) {
    return NextResponse.json({ message: "Chef not found" }, { status: 404 });
  }

  const chefRestaurants = restaurants.filter(rest =>
    chef.restaurants.includes(String(rest.id))
  );

  return NextResponse.json(chefRestaurants);
}