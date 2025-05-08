'use client'

import { useState } from "react";
import { navbarFooterLinks } from "@/app/data/link";

import Image from "next/image";
import Link from "next/link";
import hamburger from "@/app/assets/icons/hamburger.svg";
import epicure_logo_icon from "@/app/assets/icons/epicure_logo_icon.svg";
import person_icon from "@/app/assets/icons/person_icon.svg";
import search_icon from "@/app/assets/icons/search_icon.svg";
import shopping_bag_icon from "@/app/assets/icons/shopping_bag_icon.svg";
import close_icon from "@/app/assets/icons/close_icon.svg";

import styles from "@/app/components/navbar/styles/Navbar.module.scss";
import { DropDownType } from "@/app/types";

import DropDown from "../dropDown/DropDown";
import Search from "@/app/components/search/search";
import Cart from "@/app/components/cart/cart";

export default function NavbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [dropdownContent, setDropdownContent] = useState<React.ReactNode | null>(null);
    const [dropdownType, setDropdownType] = useState<DropDownType | null>(null);

    const isOpen = dropdownType !== null;

    const closeDropdown = () => {
        setDropdownContent(null);
        setDropdownType(null);
    };

    const toggleDropdown = (type: DropDownType, content: React.ReactNode) => {
        if (dropdownType === type) {
            closeDropdown();
        } else {
            setDropdownContent(content);
            setDropdownType(type);
        }
    };

    return (
        <>
            <nav className={styles.navbar}>
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className={styles.hamburger}
                >
                    {menuOpen 
                        ? <Image src={close_icon} alt="close icon" />
                        : <Image src={hamburger} alt="hamburger" />
                    }
                </button>

                <div className={styles.logoWrapper}>
                    <div className={`${styles.logo} ${menuOpen ? styles.hidden : ""}`}>
                        <Image src={epicure_logo_icon} alt="epicure logo icon" />
                    </div>
                </div>
                <div className={`${styles.icons} ${menuOpen ? styles.hidden : ""}`}>
                    <button className={styles.buttonIconsStyle} onClick={() => toggleDropdown(DropDownType.SEARCH, <Search />)}>
                        <Image src={search_icon} alt="search icon" />
                    </button>

                    <Image src={person_icon} alt="person icon" />

                    <button className={styles.buttonIconsStyle} onClick={() => toggleDropdown(DropDownType.CART, <Cart />)}>
                        <Image src={shopping_bag_icon} alt="shopping bag icon" />
                    </button>
                </div>
            </nav>

            <DropDown isOpen={isOpen} onClose={closeDropdown} type={dropdownType ?? undefined}>
                {dropdownContent}
            </DropDown>

            {menuOpen && (
                <div>
                    <div className={styles.menu}>
                        <Link href="/restaurants">Restaurants</Link>
                        <Link href="/chefs">Chefs</Link>
                    </div>
                    <div className={styles.menuFooter}>
                        {navbarFooterLinks.map((link) => (
                            <Link key={link.path} href={link.path}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}