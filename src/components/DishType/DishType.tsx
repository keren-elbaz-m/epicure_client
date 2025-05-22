
import Image from "next/image";
import style from '@/components/DishType/DishType.module.scss';
import {RESOURES} from "@/data/text";
import { dishIcons } from "@/constans/Dish.constans";    

export default function DishType(){
  return (
    <div className={style.container}>
        <h1 className={style.title}>{RESOURES.homepage.iconMeaning}</h1>
        <div className={style.iconsWrapper}>
        {dishIcons.map((icon, index) => (
          <div key={index} className={style.iconBlock}>
            <Image src={icon.src} alt={`${icon.label} icon`} className={style.iconImage}/>
            <p>{icon.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 
