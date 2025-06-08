"use client"
import Image from "next/image";
import Search from "@/components/search/search";
import style from "@/components/hero/hero.module.scss";
import hero_desktop from "@/assets/images/hero_desktop.png";
import hero_mobile from "@/assets/images/hero_mobile.png";
import { useScreenType } from "@/hooks/useScreenType";
import { screenType } from "@/types/index";
import { RESOURES } from "@/data/text";

export default function Hero() {
  const screen = useScreenType();
  const isMobile = screen === screenType.MOBILE;

    return (
      <div className={style.container}>
        <div className={style.heroContainer}>
          <Image
            src={hero_mobile}
            alt="hero background mobile"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className={`${style.heroImage} ${style.mobileOnly}`}
          />
          <Image
            src={hero_desktop}
            alt="hero background desktop"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className={`${style.heroImage} ${style.desktopOnly}`}
          />
          <div className={isMobile ? style.overlayMobile : style.overlay}>
            <div className={isMobile ? style.heroTextMobile : style.heroText}>
              {RESOURES.homepage.hero}
            </div>
            <Search variant={isMobile ? screenType.MOBILE : screenType.DESKTOP} />
          </div>
        </div>
      </div>
    );
  }