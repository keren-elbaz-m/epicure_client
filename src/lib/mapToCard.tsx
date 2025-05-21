import React from "react";
import Image from "next/image";
import Card from "@/components/Card/Card";
import RatingStars from "@/components/Rating/Rating";
import style from "@/app/Homepage.module.scss";
import { ReactElement } from "react";
import { Restaurant, Dish, Chef } from "@/types";
import { SectionPart } from "@/types";

interface CardItem {
  id: number;
  name: string;
  imageUrl: string;
}

function renderContent(item: unknown, type:SectionPart): React.ReactNode {
  switch (type) {
    case SectionPart.RESTAURANT:
      const restaurant = item as Restaurant;
      return (
        <>
          <p>{restaurant.chefName}</p>
          <RatingStars rating={restaurant.rating} max={5} />
        </>
      );

    case SectionPart.DISH:
      const dish = item as Dish;
      return (
        <>
          <div>
            <Image
              src={dish.type.iconUrl}
              alt={dish.type.name}
              width={30}
              height={30}
            />
          </div>
          <p>{dish.ingredients.join(', ')}</p>
          <p>
            <span>₪</span>{dish.price}
          </p>
        </>
      );

    default:
      return null;
  }
}



export function MapToCards(
  data: unknown[] | undefined | null,
  type: SectionPart
): ReactElement[] {
  if (!data) return [];

  return data.map((item) => {
    if (!item || typeof item !== 'object') return null;
    
    const baseItem = item as CardItem;
    if (!baseItem.id || !baseItem.name || !baseItem.imageUrl) return null;

    return (
      <Card key={baseItem.id} item={baseItem} variant={type}>
        {
          renderContent(item, type)
        }
      </Card>
    );
  }).filter((card): card is ReactElement => card !== null);
}