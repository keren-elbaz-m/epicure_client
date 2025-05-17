import Link from "next/link";
import { navbarFooterLinks } from "@/data/link";
import style from "@/components/burgerMenu/BurgerContent.module.scss";

type BurgerMenuContentProps = {
  onClose: () => void;
};

export default function BurgerMenuContent({onClose}: BurgerMenuContentProps) {
  return (
    <div>
      <div className={style.menu}>
        <Link href="/restaurants" onClick={onClose}>Restaurants</Link>
        <Link href="/chefs" onClick={onClose}>Chefs</Link>
      </div>
      <div className={style.menuFooter}>
        {navbarFooterLinks.map((link) => (
          <Link key={link.path} href={link.path} onClick={onClose}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}