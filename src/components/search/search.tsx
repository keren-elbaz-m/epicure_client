import style from "@/components/search/search.module.scss";
import heroStyle from "@/components/hero/hero.module.scss";
import search_icon from "@/assets/icons/search_icon.svg";
import Image from "next/image";
import { screenType } from "@/types";

interface SearchProps {
  variant?: screenType;
}

export default function Search({ variant = screenType.DESKTOP }: SearchProps) {

  const variantClass =
    variant === screenType.DESKTOP ? heroStyle.heroSearch :
    variant === screenType.MOBILE ? style.searchMobile :
    "";


  return(
    <div className={`${style.container} ${variantClass}`}>

      <div className={style.searchBloc}>
        <div className={style.searchBox}>
          <Image src={search_icon} alt="search icon" className={style.icon}/>
          <input type="text" placeholder="Search for restaurant cuisine, chef"/>
        </div>
      </div>
    </div>
  ) 
  }