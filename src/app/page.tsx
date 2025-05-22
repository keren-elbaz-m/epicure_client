import Hero from "@/components/hero/Hero";
import Card from "@/components/Card/Card";
import { RESOURES } from "@/data/text";
import Section from "@/components/Section/Section";
import { sectionLinks } from "@/data/link";
import RatingStars from "@/components/Rating/Rating";
import style from "@/app/Homepage.module.scss";

import { getDataFromApi } from "@/lib/getCardsFromApi";
import { MapToCards } from "@/lib/MapToCard";
import { SectionPart } from "@/types";
import DishType from "@/components/DishType/DishType";

export default async function Home() {

  const dataRest = await getDataFromApi('http://localhost:3000/api/restaurants');
  const dataDish = await getDataFromApi('http://localhost:3000/api/dish');
  const restaurantCards = MapToCards(dataRest,SectionPart.RESTAURANT);
  const dishCards = MapToCards(dataDish, SectionPart.DISH);

  return (
    <>
      <Hero/>
      <Section
        sectionLabel={RESOURES.homepage.popularSection}
        cards={restaurantCards}
        titleLink={sectionLinks[0]}
        variant={SectionPart.RESTAURANT}
      />
      <Section
        sectionLabel={RESOURES.homepage.signaturSection}
        cards={dishCards}
        variant={SectionPart.DISH}
      />
      <DishType/>
    </>
  );
}
