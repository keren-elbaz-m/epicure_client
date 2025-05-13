import Hero from "@/app/components/hero/Hero";
import Card from "@/app/components/Card/Card";
import { restaurants } from "@/app/data/restaurants.data";
import { RESOURES } from "@/app/data/text";
import Section from "./components/Section/Section";
import { sectionLinks } from "./data/link";

export default function Home() {
  const restaurantCards = restaurants.map((restaurant)=>(
    <Card key={restaurant.id} restaurant={restaurant}/>
  ))

  return (
    <>
      <Hero/>
      <Section
        sectionLabel={RESOURES.homepage.popularSection}
        cards={restaurantCards}
        titleLink={sectionLinks[0]}
      />
    </>
  );
}
