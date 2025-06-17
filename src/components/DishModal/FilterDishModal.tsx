'use client';

import { useState } from "react";
import { getItemFromApi } from "@/lib/utils/getItemFromApi";
import { API_ROUTES } from "@/constans/Api.constans";
import FilterDish from "@/components/Filter/FilterDish";
import DishModal from "@/components/DishModal/DishModal";
import { Dish, DishTabLabel } from "@/types";

type Props = {
  restaurantId: string;
  tabLabels: DishTabLabel[];
};

export default function FilterDishModal({ restaurantId, tabLabels }: Props) {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDishClick = async (dishId: number) => {
    setLoading(true);
    try {
      const dish = await getItemFromApi<Dish>(API_ROUTES.DISH_BY_ID(dishId));
      setSelectedDish(dish);
    } catch (err) {
      console.error("Failed to load dish", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <FilterDish
            restaurantId={restaurantId}
            tabLabels={tabLabels}
            onDishClick={handleDishClick}
        />
      
        {selectedDish && !loading && (
            <DishModal
                dish={selectedDish}
                onClose={() => setSelectedDish(null)}
            />
        )}
    </>
  );
}