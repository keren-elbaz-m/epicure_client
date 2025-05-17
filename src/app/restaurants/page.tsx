import Link from "next/link";
import { restaurants } from "@/data/restaurants.data";
export default function RestaurantsPage() {
  
    return (
      <div>
        <h1>All Restaurants</h1>
        {restaurants.map((restaurant) => (
            <div key={restaurant.id}>
                <h2>
                    <Link href={`/restaurants/${restaurant.id}`}>
                        {restaurant.name}
                    </Link>
                </h2>
                <p>{restaurant.chefName}</p>
            </div>
        ))}
      </div>
    );
  }