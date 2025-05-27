'use client';
import style from "@/app/restaurants/Restaurants.module.scss";
import { Restaurant, SectionPart } from "@/types";
import { useEffect, useState } from "react";
import TabsFilterBar from "./TabsFilterBar";
import { MapToCards } from "@/lib/MapToCard";
import DropdownFilterBar from "@/components/Filter/DropdownFilterBar";

type Props = {
  onCardsChange: (cards: React.ReactNode[]) => void;
};

export default function Filter() {
    const [activeTab, setActiveTab]= useState("All");
      const [cards, setCards] = useState<React.ReactNode[]>([]);


    useEffect(() => {
        const filter = activeTab === "All" ? "all" : activeTab.toLowerCase().replace(/\s/g, "");
        const fetchFilteredRestaurants = async () => {
            const response = await fetch(`/api/restaurants?filter=${filter}`);
            const data: Restaurant[] = await response.json();
            const mappedCards = MapToCards(data, SectionPart.RESTAURANT);
            setCards(mappedCards);
        };

        fetchFilteredRestaurants();
    }, [activeTab]);


    return (
        <>
            <TabsFilterBar activeTab={activeTab} onTabClick={setActiveTab} />
            <DropdownFilterBar className={style.desktopOnly}/>
            <div className={style.cardsGrid}>
                {cards}
            </div>

        </>
    );

}