import style from "@/app/restaurants/Restaurants.module.scss";
import { API_ROUTES } from "@/constans/Api.constans";
import { MapToCards } from "@/lib/utils/MapToCard";
import { SectionPart } from "@/types";
import { getDataFromApi } from "@/lib/utils/getDataFromApi";
import Filter from "@/components/Filter/Filter";

export default async function RestaurantsPage() {


  const allRestaurants = await getDataFromApi(API_ROUTES.RESTAURANTS);
  const restCards = MapToCards(allRestaurants, SectionPart.RESTAURANT);

    return (
      <div className={style.container}>
        <h1 className={style.name}>Restaurants</h1>

        <Filter/>
        
      </div>
    );
  }