"use client"
import Image from "next/image";
import Search from "@/components/search/search";
import style from "@/components/hero/hero.module.scss";
import hero_desktop from "@/assets/images/hero_desktop.png";
import hero_mobile from "@/assets/images/hero_mobile.png";
import { useScreenType } from "@/hooks/useScreenType";
import { screenType } from "@/types/index";

export default function Hero() {
  const screen = useScreenType();
  const isMobile = screen === screenType.MOBILE;

    return (
      <>
        <div className={style.heroContainer}>
          <Image
            src={isMobile? hero_mobile : hero_desktop}
            alt="hero background"
            fill
            className={style.heroImage}
          />
          <div className={isMobile ? style.overlayMobile : style.overlay}>
            <div className={isMobile ? style.heroTextMobile : style.heroText}>
              Epicure works with the top chef restaurants in Tel Aviv
            </div>
            <Search variant={isMobile ? screenType.MOBILE : screenType.DESKTOP} />
          </div>
        </div>
      </>
    );
  }