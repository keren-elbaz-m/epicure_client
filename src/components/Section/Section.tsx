import { SectionLink } from "@/types";
import { ReactNode } from "react";
import Image from "next/image";
import style from "@/components/Section/Section.module.scss";
import section_link_icon from "@/assets/icons/section_link_icon.svg";
import Carousel from "@/components/Carousel/Carousel";
import { SectionPart } from "@/types";

type SectionProps = {
    sectionLabel: string;
    titleLink?: SectionLink;
    cards: ReactNode[];
    variant: SectionPart.RESTAURANT | SectionPart.DISH | SectionPart.CHEF | SectionPart.CHEF_RESTAURANT;
};

export default function Section({sectionLabel,titleLink, cards, variant}: SectionProps){
    return(
        <section className={`${style.section} ${style[`section--${variant}`]}`}>
            <h1 className={`${style.sectionTitle} ${style[`sectionTitle--${variant}`]}`}>{sectionLabel}</h1>
            <div className={style.carouselOnly}>
                <Carousel>
                    {cards.map((card, index) => (
                    <div key={index}>{card}</div>
                    ))}
                </Carousel>
            </div>
            <div className={style.staticOnly}>
                <div className={`${style.staticCards} ${style[`staticCards--${variant}`]}`}>
                {cards.slice(0, 3).map((card, index) => (
                    <div key={index}>{card}</div>
                ))}
                </div>
            </div>
            {titleLink && (
                <div className={`${style.linkWrapper} ${style[`linkWrapper--${variant}`]} ${style.linkWrapperAligned}`}>
                    <a href={titleLink.url} className={style.link}>{titleLink.label}</a>
                    <Image src={section_link_icon} className={style.linkIcon} alt="section link icon" width={24} height={24}/>
                </div>
            )}
            
            

        </section>
    )
}