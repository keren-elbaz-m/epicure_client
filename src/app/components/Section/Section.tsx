import { SectionLink } from "@/app/types";
import { ReactNode } from "react";
import Image from "next/image";
import style from "@/app/components/Section/Section.module.scss";
import section_link_icon from "@/app/assets/icons/section_link_icon.svg";
import Carousel from "@/app/components/Carousel/Carousel";

type SectionProps = {
    sectionLabel: string;
    titleLink: SectionLink;
    cards: ReactNode[];
};

export default function Section({sectionLabel,titleLink, cards}: SectionProps){
    return(
        <section className={style.section}>
            <h1 className={style.sectionTitle}>{sectionLabel}</h1>
            <div className={style.carouselOnly}>
                <Carousel>
                    {cards.map((card, index) => (
                    <div key={index}>{card}</div>
                    ))}
                </Carousel>
            </div>
            <div className={style.staticOnly}>
                <div className={style.staticCards}>
                {cards.slice(0, 3).map((card, index) => (
                    <div key={index}>{card}</div>
                ))}
                </div>
            </div>
            
            <div className={style.linkWrapper}>
                <a href={titleLink.url} className={style.link}>{titleLink.label}</a>
                <Image src={section_link_icon} className={style.linkIcon} alt="section link icon"/>
            </div>
            
            

        </section>
    )
}