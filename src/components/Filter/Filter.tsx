"use client";
import style from "@/app/restaurants/Restaurants.module.scss";
import { Restaurant, SectionPart } from "@/types";
import { useEffect, useState } from "react";
import TabsFilterBar from "./TabsFilterBar";
import { MapToCards } from "@/lib/utils/MapToCard";
import DropdownFilterBar from "@/components/Filter/DropdownFilterBar";
import { TabLabel, TabLabelToFilterMap } from "@/types";
import { fetchRestaurants } from "@/lib/services/restaurant.service";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
    initialData: Restaurant[];
    initialFilter: string;
};

export default function Filter({ initialData, initialFilter }: Props) {
    const router = useRouter();
    const defaultTab = (Object.keys(TabLabelToFilterMap).find(
        (key) => TabLabelToFilterMap[key as TabLabel] === initialFilter
    ) || Object.keys(TabLabelToFilterMap)[0]) as TabLabel;

    const [activeTab, setActiveTab] = useState<TabLabel>(defaultTab);
    const [cards, setCards] = useState<React.ReactNode[]>(
        MapToCards(initialData, SectionPart.RESTAURANT_WIDE)
    );

    const handleTabClick = (tab: TabLabel) => {
        setActiveTab(tab);
        const newFilter = TabLabelToFilterMap[tab];
        router.push(`?filter=${newFilter}`);
    };

    useEffect(() => {
        const filter = TabLabelToFilterMap[activeTab];

        if (filter === "all") {
            setCards(MapToCards(initialData, SectionPart.RESTAURANT_WIDE));
            return;
        }

        const fetchFiltered = async () => {
            const data = await fetchRestaurants({ query: filter });
            setCards(MapToCards(data, SectionPart.RESTAURANT_WIDE));
        };

        fetchFiltered();
    }, [activeTab, initialData]);

    return (
        <>
            <TabsFilterBar
                activeTab={activeTab}
                tabLabels={Object.keys(TabLabelToFilterMap) as TabLabel[]}
                setActiveTab={handleTabClick}
            />
            <DropdownFilterBar className={style.desktopOnly} />
            <div className={style.cardsLayout}>
                <div className={style.cardsGrid}>{cards}</div>
            </div>
        </>
    );
}
