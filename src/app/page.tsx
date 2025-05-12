import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/app/components/hero/Hero";
import Carousel from "@/app/components/Carousel/Carousel";
import Card from "@/app/components/Card/Card";

const cardData = [
    { id: 1, content: 'Featured Item 1' },
    { id: 2, content: 'Featured Item 2' },
    { id: 3, content: 'Featured Item 3' },
    { id: 4, content: 'Featured Item 4' },
    { id: 5, content: 'Featured Item 5' },
    { id: 6, content: 'Featured Item 6' },
    { id: 7, content: 'Featured Item 7' },
];

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="px-8 py-6">
        <Carousel>
          {cardData.map((card) => (
            <Card key={card.id}>
              {card.content}
            </Card>
          ))}
        </Carousel>
      </div>
    </>
  );
}
