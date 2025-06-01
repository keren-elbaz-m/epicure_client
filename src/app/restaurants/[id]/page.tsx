import { getItemFromApi } from "@/lib/utils/getItemFromApi";
import { API_ROUTES} from "@/constans/Api.constans";
import Hero from "@/components/hero/Hero";
import style from "@/./app/restaurants/Restaurants.module.scss"
import Image from "next/image";
import { TabLabelToDishFilterMap, DishTabLabel, RestaurantDetailsResponse } from "@/types";
import FilterDish from "@/components/Filter/FilterDish";

export default async function Page({ params }: { params: { id: string } }) {
  const data: RestaurantDetailsResponse = await getItemFromApi(
    API_ROUTES.RESTAURANT_DETAILS(params.id)
  );
  const { restaurant } = data;

return (
  
    <div>
      {restaurant.chefName && restaurant.isOpen !== undefined && restaurant.imageUrl && (
        <>
        <Hero
          variant="restaurant"
          name={restaurant.name!}
          imageUrl={restaurant.imageUrl!}
        />
        <div className={style.details}>
          <h1 className={style.headerName}>{restaurant.name}</h1>
          <p className={style.chef}>{restaurant.chefName}</p>
          <p className={restaurant.isOpen ? style.open : style.closed}>
            {restaurant.isOpen ? (
              <>
                <Image src="/images/icons/clock.svg" alt="clock" width={16} height={16} />
                {" "}Open now
              </>
            ) : "Closed"}
          </p>
          </div>
            
        </>
      )}

      <FilterDish
        restaurantId={restaurant.id.toString()}
        tabLabels={Object.keys(TabLabelToDishFilterMap) as DishTabLabel[]}
      />

    </div>
  );
}