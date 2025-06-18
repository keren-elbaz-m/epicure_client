import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card/Card";
import style from "@/components/Card/Card.module.scss";
import RatingStars from "@/components/Rating/Rating";
import { ReactElement } from "react";
import { SectionPart } from "@/types";
import { RestaurantItem, DishItem, ChefItem } from '@/types';

export function MapToCards(
  data: unknown[] | undefined | null,
  type: SectionPart
): ReactElement[] {
  if (!data) return [];

    function renderContent(item: RestaurantItem | DishItem | ChefItem, type: SectionPart): React.ReactNode {
    switch (type) {
        case SectionPart.RESTAURANT:
        const restaurant = item as RestaurantItem;
        return (
            <>
            <p>{restaurant.chefName}</p>
            {restaurant.rating && <RatingStars rating={restaurant.rating} max={5} />}
            </>
        );

        case SectionPart.DISH:
        const dish = item as DishItem;
        return (
            <>
            <div>
                <Image
                src={dish.type.iconUrl}
                alt={dish.type.name}
                width={40}
                height={40}
                />
            </div>
            <p>{dish.ingredients.join(', ')}</p>
            <p>
                <span>₪</span>{dish.price}
            </p>
            </>
        );

        case SectionPart.CHEF:
        const chef = item as ChefItem;
        return (
            <>
            <p>{chef.description}</p>
            </>
        );

        case SectionPart.RESTAURANT_WIDE:
        const restaurantWide = item as RestaurantItem;
        return (
            <>
            <p>{restaurantWide.chefName}</p>
              {restaurantWide.rating && <RatingStars rating={restaurantWide.rating} max={5}     className={style["starRating--restaurant_wide"]}
/>}
            </>
        );

        default:
        return null;
        }
    }


  return data.map((item) => {
    if (!item || typeof item !== 'object') return null;

    if (!("id" in item) || !("name" in item) || !("imageUrl" in item)) return null;

    switch (type) {

        case SectionPart.RESTAURANT: {
        const restaurant = item as RestaurantItem;
        return (
          <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
            <Card item={restaurant} variant={SectionPart.RESTAURANT}>

<!--         case SectionPart.RESTAURANT:{
          const restaurant = item as RestaurantItem;
          return (
            <Card key={restaurant.id} item={restaurant} variant={SectionPart.RESTAURANT}> -->

              {renderContent(restaurant, SectionPart.RESTAURANT)}
            </Card>
          </Link>
        );
      }

        case SectionPart.DISH: {
          const dish = item as DishItem;
          return (
            <Card key={dish.id} item={dish} variant={SectionPart.DISH}>
              {renderContent(dish, SectionPart.DISH)}
            </Card>
          );
        }

        case SectionPart.CHEF: {
          const chef = item as ChefItem;
          return (
            <Card key={chef.id} item={chef} variant={SectionPart.CHEF}>
              {renderContent(chef, SectionPart.CHEF)}
            </Card>
          );
        }

        case SectionPart.CHEF_RESTAURANT: {
          const chef = item as ChefItem;
          return (
            <Card key={chef.id} item={chef} variant={SectionPart.CHEF_RESTAURANT}>
              {renderContent(chef, SectionPart.CHEF_RESTAURANT)}
            </Card>
          );
        }

        case SectionPart.RESTAURANT_WIDE:{
          const restaurant = item as RestaurantItem;
          return (
            <Card key={restaurant.id} item={restaurant} variant={SectionPart.RESTAURANT_WIDE}>
              {renderContent(restaurant, SectionPart.RESTAURANT_WIDE)}
            </Card>
          );
        }

        default:
          return null;
      }
    })
    .filter((card): card is ReactElement => card !== null);
}