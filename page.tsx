import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/app/components/hero/Hero";
import Carousel from "@/app/components/Carousel/Carousel";
import Card from "@/app/components/Card/Card";
import { restaurants } from "./src/app/data/restaurants.data";
import { RESOURES } from "./src/app/data/text";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className={styles.popularContainer}>
        {RESOURES.homepage.popularSection}
        <div>
          <Carousel>
            {restaurants.map((restaurant) => (
              <Card 
                key={restaurant.id} 
                restaurant={restaurant}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
