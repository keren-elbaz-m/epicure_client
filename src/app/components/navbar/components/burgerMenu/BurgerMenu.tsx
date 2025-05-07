import Link from "next/link";
import { navbarFooterLinks } from "@/app/data/link";
import style from "@/app/components/navbar/styles/BurgerContent.module.scss";

export default function BurgerMenuContent() {
  return (
    <div>
      <div className={style.menu}>
        <Link href="/restaurants">Restaurants</Link>
        <Link href="/chefs">Chefs</Link>
      </div>
      <div className={style.menuFooter}>
        {navbarFooterLinks.map((link) => (
          <Link key={link.path} href={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}