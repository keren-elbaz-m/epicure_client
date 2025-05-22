
import Image from "next/image";
import style from '@/components/About/About.module.scss';
import epicureLogo from "@/../public/images/about/epicure-full-logo.png";
import {RESOURES} from "@/data/text";
import { contactIcons } from "@/constans/About.constans"; 

export default function About(){
  return (
    <div className={style.container}>
        <div className={style.secondaryContainer}>
            <div className={style.textBlock}>
                <h1 className={style.title}>{RESOURES.homepage.aboutUs}</h1>
                <p>{RESOURES.homepage.description}</p>
                <p>{RESOURES.homepage.description}</p>
            </div>
            <div className={style.iconsWrapper}>
                {contactIcons.map((icon, index) => (
                    <button key={index} className={style.iconBlock}>
                        <Image src={icon.src} alt={`${icon.label} icon`} className={style.iconImage}/>
                        <p>{icon.label}</p>
                    </button>
                ))}
            </div>
        </div>
        <div className={style.logo}>
            <Image src={epicureLogo} alt="Epicure logo" width={120} height={120} />
        </div>
    </div>
  );
} 
