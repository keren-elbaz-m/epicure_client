import style from "@/app/restaurants/Restaurants.module.scss";
import Filter from "@/components/Filter/Filter";
import { fetchRestaurants } from "@/lib/services/restaurant.service";

export default async function RestaurantsPage({
    searchParams,
}: {
    searchParams: { filter?: string };
}) {
    const filter = searchParams.filter || "all";
    const restaurants = await fetchRestaurants({ query: filter });

    return (
        <div className={style.layout}>
            <div className={style.container}>
                <h1 className={style.name}>Restaurants</h1>
                <Filter initialData={restaurants} initialFilter={filter} />
            </div>
        </div>
    );
}
