import Image from "next/image";
// import styles from "./page.module.css";
import Hero from "@/app/components/hero/Hero";
import Carousel from "@/app/components/Carousel/Carousel";
import Card from "@/app/components/Card/Card";
import { restaurants } from "@/app/data/restaurants.data";
import { RESOURES } from "@/app/data/text";
import styles from "@/app/assets/styles/Homepage.module.scss"

export default function Home() {
  return (
    <>
      <Hero/>
      <div className={styles.container}>
        <div className={styles.headlineText}>
          {RESOURES.homepage.popularSection}
        </div>
          
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
