import { getChefById } from "@/lib/services/chefService";
import { getRestaurantsByIds } from "@/lib/services/restaurantService";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const chef = await getChefById(params.id);

  if (!chef) {
    return new Response(JSON.stringify({ error: "Chef not found" }), { status: 404 });
  }

  const restaurantIds = chef.restaurants;
  const fullRestaurants = await getRestaurantsByIds(restaurantIds);

  const fullChefObject = {
    ...chef,
    restaurants: fullRestaurants
  };

  return new Response(JSON.stringify(fullChefObject), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}