import Hero from "@/components/hero/Hero";
import Card from "@/components/Card/Card";
import { RESOURES } from "@/data/text";
import Section from "@/components/Section/Section";
import { sectionLinks } from "@/data/link";
import RatingStars from "@/components/Rating/Rating";
import style from "@/app/Homepage.module.scss";
import DishType from "@/components/DishType/DishType";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/restaurants');
  const data = await res.json();

  const restaurantCards = data.map((restaurant: any) => (
  <Card key={restaurant.id} item={restaurant}>
    <p>{restaurant.chefName}</p>
    <div className={style.rateStars}>
      <RatingStars rating={restaurant.rating} max={5}/>
    </div>
  </Card>
));

  return (
    <>
      <Hero/>
      <Section
        sectionLabel={RESOURES.homepage.popularSection}
        cards={restaurantCards}
        titleLink={sectionLinks[0]}
      />
      <DishType/>
    </>
  );
}
