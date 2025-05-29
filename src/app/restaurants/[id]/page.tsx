// page.tsx
import { getItemFromApi } from "@/lib/utils/getItemFromApi";
import { API_ROUTES } from "@/constans/Api.constans";
import { MapToCards } from "@/lib/utils/MapToCard";
import { SectionPart } from "@/types";
import { notFound } from "next/navigation";
import Hero from "@/components/hero/Hero";
import style from "@/./app/restaurants/Restaurants.module.scss"
import Image from "next/image";
import TabsFilterBar from "@/components/Filter/TabsFilterBar";
import { RestaurantDetailsResponse } from "@/types";

export default async function RestaurantPage({ params }: { params: { id: string } }) {
  if (!params?.id) {
    notFound(); 
  }



const data:RestaurantDetailsResponse = await getItemFromApi(API_ROUTES.RESTAURANT_DETAILS(params.id));
const { restaurant, dishes } = data;  
const TABS = ["Breakfast", "Lunch", "Dinner"];
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

      
      <div className={style.cardsGrid}>
        {MapToCards(dishes, SectionPart.DISH)}
      </div>
    </div>
  );
}