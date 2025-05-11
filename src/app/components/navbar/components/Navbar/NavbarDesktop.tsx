import styles from "@/app/components/navbar/styles/Navbar.module.scss"
import Image from "next/image";
import Link from "next/link";

import epicure_logo_icon from "@/app/assets/icons/epicure_logo_icon.svg";
import person_icon from "@/app/assets/icons/person_icon.svg";
import search_icon from "@/app/assets/icons/search_icon.svg";
import shopping_bag_icon from "@/app/assets/icons/shopping_bag_icon.svg";

import { DropDownType } from "@/app/types";
import Cart from "@/app/components/cart/cart";
import { useState } from "react";
import DropDown from "../dropDown/DropDown";

export default function NavbarDesktop() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);
  const closeCart = () => setIsCartOpen(false);

  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.desktopContent}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <Image src={epicure_logo_icon} alt="epicure logo icon" />
          </div>
          
          <span className={styles.brand}>
            Epicure
          </span>

          <div className={styles.links}>
              <Link href="/restaurants">Restaurants</Link>
              <Link href="/chefs">Chefs</Link>
          </div>
        </div>

        <div className={styles.icons}>
            <button className={styles.buttonIconsStyle}>
                <Image src={search_icon} alt="search icon" />
            </button>
                <Image src={person_icon} alt="person icon" />

            <button className={styles.buttonIconsStyle} onClick={toggleCart}>
                <Image src={shopping_bag_icon} alt="shopping bag icon" />
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
  </>
  );
}