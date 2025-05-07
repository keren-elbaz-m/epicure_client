'use client'

import { useState } from "react";
import { navbarFooterLinks } from "@/app/data/link";

import Link from "next/link";
import hamburger from "@/app/assets/icons/hamburger.svg";
import epicure_logo_icon from "@/app/assets/icons/epicure_logo_icon.svg";
import person_icon from "@/app/assets/icons/person_icon.svg";
import search_icon from "@/app/assets/icons/search_icon.svg";
import shopping_bag_icon from "@/app/assets/icons/shopping_bag_icon.svg";
import close_icon from "@/app/assets/icons/close_icon.svg";
import Image from "next/image";
import styles from "@/app/components/navbar/styles/Navbar.module.scss";
import DropDown from "../dropDown/DropDown";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import SearchContent from "@/app/components/search/search";
import { DropDownType } from "@/app/types";

export default function NavbarMobile() {

    const [dropdownContent, setDropdownContent] = useState<React.ReactNode | null>(null);
    const [dropdownType, setDropdownType] = useState<DropDownType | null>(null);

    const isOpen = dropdownType !== null;

    const closeDropdown = () => {
        setDropdownContent(null);
        setDropdownType(null);
    };
    

    return (
        <>
            <nav className={styles.navbar}>
                <button 
                    onClick={() => {
                        if (isOpen) {
                            closeDropdown();
                        } else {
                            setDropdownContent(<BurgerMenu />);
                            setDropdownType(DropDownType.BURGER);
                        }
                    }} 
                    className={styles.hamburger}
                >
                    {isOpen 
                        ? <Image src={close_icon} alt="close icon" />
                        : <Image src={hamburger} alt="hamburger" />
                    }
                </button>

                <div className={styles.logoWrapper}>
                    <div className={`${styles.logo} ${dropdownType === "search" ? styles.hidden : ""}`}>
                        <Image src={epicure_logo_icon} alt="epicure logo icon" />
                    </div>

                    {dropdownType === "search" && (
                        <span className={styles.searchTitle}>Search</span>
                    )}
                </div>
            
                <div className={`${styles.icons} ${isOpen ? styles.hidden : ""}`}>
                    <button className={styles.buttonIconsStyle} onClick={()=>{
                            if(isOpen){
                                closeDropdown();
                            }else{
                                setDropdownContent(<SearchContent/>);
                                setDropdownType(DropDownType.SEARCH);
                            }
                        }}>
                        <Image src={search_icon} alt="search icon" />
                    </button>
                    
                    <Image src={person_icon} alt="person icon" />
                    <Image src={shopping_bag_icon} alt="shopping bag icon" />
                </div>
            </nav>

            <DropDown isOpen={isOpen} onClose={closeDropdown} type={dropdownType ?? undefined}>
                {dropdownContent}
            </DropDown>
        </>
    );
}