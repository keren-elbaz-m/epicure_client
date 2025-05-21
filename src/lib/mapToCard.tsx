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

type ItemType = SectionPart.RESTAURANT | SectionPart.DISH | SectionPart.CHEF;

export function mapToCards(
  data: unknown[] | undefined | null,
  type: ItemType
): ReactElement[] {
  if (!data) return [];

  return data.map((item) => {
    if (!item || typeof item !== 'object') return null;
    
    const baseItem = item as CardItem;
    if (!baseItem.id || !baseItem.name || !baseItem.imageUrl) return null;

    return (
      <Card key={baseItem.id} item={baseItem} variant={type}>
        {type === SectionPart.RESTAURANT && (
          <>
            <p>{(item as Restaurant).chefName}</p>
            <div className={style.rateStars}>
              <RatingStars rating={(item as Restaurant).rating} max={5} />
            </div>
          </>
        )}
        {type === SectionPart.DISH && (
          <>
          <div>
            <Image
              src={(item as Dish).type.iconUrl}
              alt={(item as Dish).type.name}
              width={40}
              height={40}
            />
          </div>
          
            <p>{(item as Dish).ingredients.join(', ')}</p>
            <p>
              <span>₪</span>
              {(item as Dish).price}
            </p>
    
          </>
        )}
        {type === 'chef' && (
          <>
            <p>{(item as Chef).description}</p>
          </>
        )}
      </Card>
    );
  }).filter((card): card is ReactElement => card !== null);
}