"use client"
import Image from "next/image";
import Search from "@/components/search/search";
import style from "@/components/hero/hero.module.scss";
import { useScreenType } from "@/hooks/useScreenType";
import { screenType } from "@/types/index";
import { HeroProps } from "@/types/index";

export default function Hero(props: HeroProps) {
  const screen = useScreenType();
  const isMobile = screen === screenType.MOBILE;

  if (props.variant === 'home') {
    const finalImage = isMobile ? props.fallback.mobile : props.fallback.desktop;

    return (
      <div className={style.heroContainer}>
        <Image src={finalImage} alt="hero image" fill className={style.heroImage} />
        <div className={isMobile ? style.overlayMobile : style.overlay}>
          <div className={isMobile ? style.heroTextMobile : style.heroText}>
            {props.fallbackOverlay}
          </div>
          <Search variant={isMobile ? screenType.MOBILE : screenType.DESKTOP} />
        </div>
      </div>
    );
  }
  if (props.variant === "restaurant") {
  return (
    <div className={style.heroRestContainer}>
      <Image src={props.imageUrl} alt={props.name} fill className={style.heroImage} />
    </div>
  );}
}