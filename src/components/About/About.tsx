
import Image from "next/image";
import style from '@/components/DishType/About.module.scss';
import {RESOURES} from "@/data/text";
import { contactIcons } from "@/constans/About.contans"; 
    
export default function About(){
  return (
    <div className={style.container}>
        <h1 className={style.title}>{RESOURES.homepage.aboutUs}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id incidunt quisquam saepe excepturi voluptates consequuntur sequi non laborum nisi? Eum fuga quisquam assumenda ullam voluptatibus inventore ipsa quos at tempora.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id incidunt quisquam saepe excepturi voluptates consequuntur sequi non laborum nisi? Eum fuga quisquam assumenda ullam voluptatibus inventore ipsa quos at tempora.</p>
        <div className={style.iconsWrapper}>
        {contactIcons.map((icon, index) => (
          <div key={index} className={style.iconBlock}>
            <Image src={icon.src} alt={`${icon.label} icon`} className={style.iconImage}/>
            <p>{icon.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 
