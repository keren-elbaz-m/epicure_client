"use client";

import { useEffect, useState } from "react";
import { DishTabLabel } from "@/types";
import { MapToCards } from "@/lib/utils/MapToCard";
import { SectionPart } from "@/types";
import TabsFilterBar from "@/components/Filter/TabsFilterBar";
import style from "@/app/restaurants/Restaurants.module.scss";
import { DishService } from "@/lib/services/dish.service";
import { TabLabelToDishFilterMap, DishFilter } from "@/types";

type Props = {
    restaurantId: string;
    tabLabels: DishTabLabel[];
};

export default function FilterDish({ restaurantId, tabLabels }: Props) {
    const [activeTab, setActiveTab] = useState<DishTabLabel>(tabLabels[0]);
    const [cards, setCards] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const filter: DishFilter = TabLabelToDishFilterMap[activeTab];

        const fetchDishes = async () => {
            try {
                const dishes = await DishService.fetchDishesByRestaurant(
                    restaurantId,
                    filter
                );
                const mapped = MapToCards(dishes, SectionPart.DISH);
                setCards(mapped);
            } catch (error) {
                console.error("Failed to load dishes:", error);
                setCards([]);
            }
        };

        fetchDishes();
    }, [restaurantId, activeTab]);

    return (
        <>
            <TabsFilterBar
                activeTab={activeTab}
                tabLabels={tabLabels}
                setActiveTab={setActiveTab}
            />
            <div className={style.cardsGrid}>{cards}</div>
        </>
    );
}
