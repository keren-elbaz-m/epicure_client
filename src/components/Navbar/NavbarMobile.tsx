'use client'

import { ReactNode, useState } from "react";

import hamburger from "@/assets/icons/hamburger.svg";
import epicure_logo_icon from "@/assets/icons/epicure_logo_icon.svg";
import person_icon from "@/assets/icons/person_icon.svg";
import search_icon from "@/assets/icons/search_icon.svg";
import shopping_bag_icon from "@/assets/icons/shopping_bag_icon.svg";
import close_icon from "@/assets/icons/close_icon.svg";
import Image from "next/image";
import styles from "@/components/Navbar/Navbar.module.scss";
import DropDown from "@/components/dropDown/DropDown";
import Cart from "@/components/cart/cart";
import BurgerMenuContent from "@/components/burgerMenu/BurgerMenu";
import Search from "@/components/search/search";
import { dropdownBehaviors, DropDownType } from "@/types";



export default function NavbarMobile() {

    const [dropdownContent, setDropdownContent] = useState<React.ReactNode | null>(null);
    const [dropdownType, setDropdownType] = useState<DropDownType | null>(null);

    const isOpen = dropdownType !== null;

    const closeDropdown = () => {
        setDropdownContent(null);
        setDropdownType(null);
    };

    const handleDropdownClick = (type: DropDownType, content: ReactNode) => {
        if (isOpen) {
            closeDropdown();
        } else {
            setDropdownContent(content);
            setDropdownType(type);
        }
    };
    
    const behavior = dropdownBehaviors[dropdownType ?? DropDownType.CART];

    return (
        <>
            <nav className={styles.navbar}>
                <button 
                    onClick={()=> handleDropdownClick(DropDownType.BURGER, <BurgerMenuContent onClose={closeDropdown} />)}
                    className={styles.hamburger}
                >
                    {isOpen 
                        ? <Image src={close_icon} alt="close icon" />
                        : <Image src={hamburger} alt="hamburger" />
                    }
                </button>

                <div className={styles.logoWrapper}>
                    {!behavior.hideLogo && (
                        <div className={`${styles.logo} ${dropdownType === "search" ? styles.hidden : ""}`}>
                            <Image src={epicure_logo_icon} alt="epicure logo icon" />
                        </div>
                    )}
                    {dropdownType === "search" && (
                        <span className={styles.searchTitle}>Search</span>
                    )}
                </div>
            
                {!behavior.hideIcons && (
                    <div className={styles.icons}>
                        <button className={styles.buttonIconsStyle} onClick={()=>{
                            handleDropdownClick(DropDownType.SEARCH, <Search/>)
                        }}>
                            <Image src={search_icon} alt="search icon" />
                        </button>

                            <Image src={person_icon} alt="person icon" />
                        <button className={styles.buttonIconsStyle} onClick={()=>{
                            handleDropdownClick(DropDownType.CART, <Cart/>)
                        }}>
                            <Image src={shopping_bag_icon} alt="shopping bag icon" />
                        </button>
                    </div>
                )}
               
            </nav>

            <DropDown isOpen={isOpen} onClose={closeDropdown} type={dropdownType ?? undefined}>
                {dropdownContent}
            </DropDown>
        </>
    );
}