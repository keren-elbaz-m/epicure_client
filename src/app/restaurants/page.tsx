import TabsFilterBar from "@/components/Filter/TabsFilterBar";
import DropdownFilterBar from "@/components/Filter/DropdownFilterBar";
import style from "@/app/restaurants/Restaurants.module.scss";
import { API_ROUTES } from "@/constans/Api.constans";
import { MapToCards } from "@/lib/MapToCard";
import { SectionPart } from "@/types";
import { getDataFromApi } from "@/lib/getCardsFromApi";

export default async function RestaurantsPage() {

  const data = await getDataFromApi(API_ROUTES.RESTAURANTS);
  const restCards = MapToCards(data, SectionPart.RESTAURANT);
  
    return (
      <div>
        <h1 className={style.name}>Restaurants</h1>
        <TabsFilterBar activeTab="All" />
        <DropdownFilterBar className={style.desktopOnly}/>

        <div className={style.cardsSection}>
          <div className={style.cardsGrid}>
            {restCards.map((card, index) => (
              <div key={index}>{card}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }