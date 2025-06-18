'use client';
import style from "@/app/restaurants/Restaurants.module.scss";
import { Restaurant, SectionPart } from "@/types";
import { useEffect, useState } from "react";
import TabsFilterBar from "./TabsFilterBar";
import { MapToCards } from "@/lib/utils/MapToCard";
import DropdownFilterBar from "@/components/Filter/DropdownFilterBar";
import { TabLabel, TabLabelToFilterMap } from "@/types";

export default function Filter() {
    const defaultTab = Object.keys(TabLabelToFilterMap)[0] as TabLabel;
    const [activeTab, setActiveTab]= useState<TabLabel>(defaultTab);
    const [cards, setCards] = useState<React.ReactNode[]>([]);


    useEffect(() => {
        const filter = TabLabelToFilterMap[activeTab];
        const fetchFilteredRestaurants = async () => {
            const response = await fetch(`/api/restaurants?filter=${filter}`);
            const data: Restaurant[] = await response.json();
            const mappedCards = MapToCards(data, SectionPart.RESTAURANT_WIDE);
            setCards(mappedCards);
        };

        fetchFilteredRestaurants();
    }, [activeTab]);


    return (
        <>
            <TabsFilterBar tabLabels={Object.keys(TabLabelToFilterMap) as TabLabel[]} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} />
            <DropdownFilterBar className={style.desktopOnly}/>
            <div className={style.cardsLayout}>
                <div className={style.cardsGrid}>
                    {cards}
                </div>
            </div>
            

        </>
    );

}