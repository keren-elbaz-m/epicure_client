import styles from "@/components/Navbar/Navbar.module.scss"
import Image from "next/image";
import Link from "next/link";

import epicure_logo_icon from "@/assets/icons/epicure_logo_icon.svg";
import person_icon from "@/assets/icons/person_icon.svg";
import search_icon from "@/assets/icons/search_icon.svg";
import shopping_bag_icon from "@/assets/icons/shopping_bag_icon.svg";
import layoutStyle from "@/app/Layout.module.scss";

import { DropDownType } from "@/types";
import Cart from "@/components/cart/cart";
import { useState } from "react";
import DropDown from "@/components/dropDown/DropDown";
import { RESOURES } from "@/data/text";
import { getPageContext } from "@/lib/utils/getPageContext";

type NavbarDesktopProps = {
  pathname: string;
}
export default function NavbarDesktop({pathname}:NavbarDesktopProps) {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);
  const closeCart = () => setIsCartOpen(false);
  const {isRestaurants, isChefs} = getPageContext(pathname);

  return (
    <div className={layoutStyle.navbarWrapper}>
    <nav className={styles.navbar}>
      <div className={styles.desktopContent}>
        <div className={styles.leftSection}>

          <Link href="/">
            <div className={styles.logo}>
              <Image src={epicure_logo_icon} alt="epicure logo icon" />
            </div>
          </Link>

<!--           <div className={styles.logoIcon}>
            <Link href="/">
              <div className={styles.logo}>
                <Image src={epicure_logo_icon} alt="epicure logo icon" />
              </div>
            </Link>
            <span className={styles.brandName}>
              {RESOURES.app.appName.toUpperCase()}
            </span>

          </div> -->

          

          <div className={styles.links}>
            <Link
              href="/restaurants"
              className={`${styles.navLink} ${isRestaurants ? styles.active : ''}`}
            >
              Restaurants
            </Link>    
            <Link
              href="/chefs"
              className={`${styles.navLink} ${isChefs ? styles.active : ''}`}
            >
              Chefs
            </Link>          
          </div>
        </div>

        <div className={styles.icons}>
            <button className={styles.buttonIconsStyle}>
                <Image src={search_icon} alt="search icon" width={24} height={24}/>
            </button>
                <Image src={person_icon} alt="person icon" width={24} height={24}/>

            <button className={styles.buttonIconsStyle} onClick={toggleCart}>
                <Image src={shopping_bag_icon} alt="shopping bag icon" width={24} height={24}/>
            </button>

        </div>

      </div>
    </nav>
    <DropDown
      isOpen={isCartOpen}
      onClose={closeCart}
      type={DropDownType.CART}
    >
      <Cart />
    </DropDown>
  </div>
  );
}