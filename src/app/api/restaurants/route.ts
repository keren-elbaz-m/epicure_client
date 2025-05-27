import { NextResponse } from "next/server";
import { restaurants } from "@/data/restaurants.data";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const filter = url.searchParams.get("filter");

  if (!filter || filter === "all") {
    return NextResponse.json(restaurants);
  }

  let filtered = restaurants;

  switch (filter) {
    case "popular":
      filtered = restaurants.filter((r) => r.isPopular);
      break;
    case "new":
      filtered = restaurants.filter((r) => r.isNew);
      break;
    case "open":
      filtered = restaurants.filter((r) => r.isOpen);
      break;
    default:
      break;
  }

  return NextResponse.json(filtered);
}