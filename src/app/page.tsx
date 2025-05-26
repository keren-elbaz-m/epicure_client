import Hero from "@/components/hero/Hero";
import { RESOURES } from "@/data/text";
import Section from "@/components/Section/Section";
import { sectionLinks } from "@/data/link";
import { getDataFromApi } from "@/lib/getCardsFromApi";
import { MapToCards } from "@/lib/MapToCard";
import { Chef, SectionPart } from "@/types";
import DishType from "@/components/DishType/DishType";
import About from "@/components/About/About";
import { API_CHEF_BY_ID, API_REST_CHEF_BY_ID, API_ROUTES } from "@/constans/Api.constans";
import { getRandomChef } from "@/lib/getRandomChef";
import { getItemFromApi } from "@/lib/getItemFromApi";

export default async function Home() {



  const dataRest = await getDataFromApi(API_ROUTES.RESTAURANTS);
  const dataDish = await getDataFromApi(API_ROUTES.DISHES);
  const restaurantCards = MapToCards(dataRest,SectionPart.RESTAURANT);
  const dishCards = MapToCards(dataDish, SectionPart.DISH);

  const chefID = await getRandomChef();
  const dataChef = await getItemFromApi<Chef>(API_CHEF_BY_ID(chefID || 1));
  const chefCards = MapToCards([dataChef], SectionPart.CHEF);

  const restOfChefOfTheWeek = await getDataFromApi(API_REST_CHEF_BY_ID(chefID || 1));
  const restOfChefCards = MapToCards(restOfChefOfTheWeek, SectionPart.RESTAURANT);
  const firstName = dataChef?.name.split(" ")[0] || "Chef";
  console.log(dataChef)
  console.log(dataChef?.name.split(" ")[0]);

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
      <Section
        sectionLabel={RESOURES.homepage.chefOfTheWeek}
        cards={chefCards}
        variant={SectionPart.CHEF}
      />
      <Section
        sectionLabel={`${firstName}${RESOURES.homepage.chefRestuarants}`}
        cards={restOfChefCards}
        titleLink={sectionLinks[0]}
        variant={SectionPart.CHEF_RESTAURANT}
      />
      <About/>
    </>
  );
}
