'use client';

import { useEffect, useState } from "react";
import { Dish, DishTabLabel } from "@/types";
import { API_ROUTES, DISHES_BY_RESTAURANT } from "@/constans/Api.constans";
import { MapToCards } from "@/lib/utils/MapToCard";
import { SectionPart } from "@/types";
import TabsFilterBar from "@/components/Filter/TabsFilterBar";
import style from "@/app/restaurants/Restaurants.module.scss";
import { DishService } from "@/lib/services/dish.service";

  type Props = {
    restaurantId: string;
    tabLabels: DishTabLabel[];
    onDishClick?: (dishId: number) => void;
  };

export default function FilterDish({ restaurantId, tabLabels, onDishClick }: Props) {
  const [activeTab, setActiveTab] = useState<DishTabLabel>(tabLabels[0]);
  const [cards, setCards] = useState<React.ReactNode[]>([]);
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
  const fetchFilteredDishes = async () => {
    const result = await DishService.getDishesByRestaurant(restaurantId, activeTab);
    setDishes(result);

    const mapped = MapToCards(result, SectionPart.DISH); 
    setCards(mapped);
  };

  fetchFilteredDishes();
}, [restaurantId, activeTab]);

  return (
    <>
      <TabsFilterBar
        activeTab={activeTab}
        tabLabels={tabLabels}
        onTabClick={setActiveTab}
      />
      {/* <div className={style.cardsGrid}>
        {cards}
      </div> */}
      <div className={style.cardsGrid}>
        {onDishClick
          ? dishes.map((dish) => (
              <div key={dish.id} onClick={() => onDishClick(dish.id)}>
                {MapToCards([dish], SectionPart.DISH)[0]}
              </div>
            ))
          : cards}
      </div>
    </>
  );
}