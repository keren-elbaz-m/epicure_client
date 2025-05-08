import style from "@/app/components/search/search.module.scss";
import search_icon from "@/app/assets/icons/search_icon.svg";
import Image from "next/image";

export default function Search() {
  return(
    <div className={style.container}>

      <div className={style.searchBloc}>
        <div className={style.searchBox}>
          <Image src={search_icon} alt="search icon" className={style.icon}/>
          <input type="text" placeholder="Search for restaurant cuisine, chef"/>
        </div>
      </div>
    </div>
  ) 
  }