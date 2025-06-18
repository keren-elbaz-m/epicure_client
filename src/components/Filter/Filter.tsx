"use client";
import style from "@/app/restaurants/Restaurants.module.scss";
import { Restaurant, SectionPart } from "@/types";
import { useEffect, useState } from "react";
import TabsFilterBar from "./TabsFilterBar";
import { MapToCards } from "@/lib/utils/MapToCard";
import DropdownFilterBar from "@/components/Filter/DropdownFilterBar";
import { TabLabel, TabLabelToFilterMap } from "@/types";
import { fetchRestaurants } from "@/lib/services/restaurant.service";

export default function Filter() {
    const defaultTab = Object.keys(TabLabelToFilterMap)[0] as TabLabel;
    const [activeTab, setActiveTab] = useState<TabLabel>(defaultTab);
    const [cards, setCards] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const filter = TabLabelToFilterMap[activeTab];

        const fetchFilteredRestaurants = async () => {
            const data = await fetchRestaurants({ query: filter });
            const mappedCards = MapToCards(data, SectionPart.RESTAURANT_WIDE);
            setCards(mappedCards);
        };

        fetchFilteredRestaurants();
    }, [activeTab]);
    return (
        <>
            <TabsFilterBar activeTab={activeTab} onTabClick={setActiveTab} />
            <DropdownFilterBar className={style.desktopOnly} />
            <div className={style.cardsLayout}>
                <div className={style.cardsGrid}>{cards}</div>
            </div>
        </>
    );
}
