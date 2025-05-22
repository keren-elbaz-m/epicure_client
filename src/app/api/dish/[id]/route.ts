import { NextResponse } from "next/server";
import { dishes } from "@/data/dishes.data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const dishId = Number(params.id);
  const dish = dishes.find(d => d.id === dishId);

  if (!dish) {
    return NextResponse.json({ message: "dish not found" }, { status: 404 });
  }

  return NextResponse.json(dish);
}