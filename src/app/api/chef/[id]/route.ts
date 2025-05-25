import { NextResponse } from "next/server";
import { chefs } from "@/data/chefs.data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const chefId = Number(params.id);
  const chef = chefs.find(c => c.id === chefId);

  if (!chef) {
    return NextResponse.json({ message: "chef not found" }, { status: 404 });
  }

  return NextResponse.json(chef);
}