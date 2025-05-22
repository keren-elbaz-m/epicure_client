
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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro vitae officiis enim dignissimos culpa eveniet possimus dolorem aperiam. Atque temporibus culpa, officia facilis doloribus asperiores fugit officiis odio amet optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus nam, consequatur eaque sunt dolor ratione distinctio voluptatibus cupiditate vel, provident maiores vero hic! Est debitis quibusdam odit mollitia iste.</p>
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
