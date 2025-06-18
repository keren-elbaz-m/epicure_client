import Hero from "@/components/hero/Hero";
import hero_desktop from "@/assets/images/hero_desktop.png";
import hero_mobile from "@/assets/images/hero_mobile.png";
import { RESOURES } from "@/data/text";
import Section from "@/components/Section/Section";
import { sectionLinks } from "@/data/link";
import { MapToCards } from "@/lib/utils/MapToCard";
import { SectionPart } from "@/types";
import DishType from "@/components/DishType/DishType";
import About from "@/components/About/About";
import { fetchRestaurants } from "@/lib/services/restaurant.service";
import { fetchDishes } from "@/lib/services/dish.service";
import { fetchChefOfTheWeek } from "@/lib/services/chef.service";
import { getHomePageData } from "@/lib/services/home-page.service";

export default async function Home() {
    const { chefData, restaurantData, dishData } = await getHomePageData();

    // const dataRest = await fetchRestaurants();
    // const dataDish = await fetchDishes();
    const restaurantCards = MapToCards(restaurantData, SectionPart.RESTAURANT);
    const dishCards = MapToCards(dishData, SectionPart.DISH);

    // const chefData = await fetchChefOfTheWeek();

    const chefCards = chefData ? MapToCards([chefData], SectionPart.CHEF) : [];
    const restOfChefCards = chefData?.restaurants
        ? MapToCards(chefData.restaurants, SectionPart.CHEF_RESTAURANT)
        : [];

    const firstName = chefData?.name.split(" ")[0] ?? "";

    return (
        <>
            <Hero
                variant="home"
                fallback={{
                    mobile: hero_mobile.src,
                    desktop: hero_desktop.src,
                }}
                fallbackOverlay={RESOURES.homepage.hero}
            />

            <Section
                sectionLabel={RESOURES.homepage.popularSection}
                cards={restaurantCards}
                titleLink={sectionLinks[0]}
                variant={SectionPart.RESTAURANT}
            />
            <Section
                sectionLabel={RESOURES.homepage.signaturSection}
                cards={dishCards}
                titleLink={sectionLinks[0]}
                variant={SectionPart.DISH}
            />
            <DishType />
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
            <About />
        </>
    );
}
