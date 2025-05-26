import style from "@/components/search/search.module.scss";
import heroStyle from "@/components/hero/hero.module.scss";
import search_icon from "@/assets/icons/search_icon.svg";
import Image from "next/image";
import { screenType } from "@/types";
import {RESOURES} from "@/data/text";

interface SearchProps {
  variant?: screenType | 'dropdown' | 'hero';

}

export default function Search({ variant = screenType.DESKTOP }: SearchProps) {

  const variantClass =
    variant === screenType.DESKTOP ? heroStyle.heroSearch :
    variant === screenType.MOBILE ? style.searchMobile :
    "";


  return(
    <div className={`${style.container} ${variantClass} ${style[`container--${variant}`]}`}>

      <div className={`${style.searchBloc}  ${style[`searchBloc--${variant}`]}`}>
        <div className={`${style.searchBox} ${style[`searchBox--${variant}`]}`} >
          <Image src={search_icon} alt="search icon" className={style.icon}/>
          <input type="text" placeholder={RESOURES.navbar.search}/>
        </div>
      </div>
    </div>
  ) 
  }