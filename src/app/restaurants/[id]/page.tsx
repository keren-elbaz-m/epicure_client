import { Restaurant } from "@/types";

type Props = {
    params: {
        id: string;
    }
}

export default async function RestaurantDetailsPage({ params }: Props) {
    const res = await fetch(`http://localhost:3000/api/restaurants/${params.id}`);
    const restaurant: Restaurant = await res.json();
  
    if (!restaurant?.id) {
      return <div>Restaurant not found</div>;
    }
  
    return (
      <div>
        <h1>{restaurant.name}</h1>
        <p>Chef: {restaurant.chefName}</p>
        <p>Rating: {restaurant.rating}</p>
        <p>Location: {restaurant.location.lat}, {restaurant.location.lng}</p>
        <p>Price Range: {restaurant.priceRange.min} - {restaurant.priceRange.max}</p>
      </div>
    );
  }