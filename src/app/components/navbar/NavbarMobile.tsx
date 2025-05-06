'use client'

import { useState } from "react";
import { navbarFooterLinks } from "@/app/data/link";

import Link from "next/link";
import hamburger from "@/app/assets/icons/hamburger.svg";
import epicure_logo from "@/app/assets/images/epicure_logo.jpg";
import person_icon from "@/app/assets/icons/person_icon.svg";
import search_icon from "@/app/assets/icons/search_icon.svg";
import shopping_bag_icon from "@/app/assets/icons/shopping_bag_icon.svg";
import close_icon from "@/app/assets/icons/close_icon.svg";
import Image from "next/image";
import styles from "@/app/components/navbar/Navbar.module.scss";

export default function NavbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                        <Image src={epicure_logo} alt="epicure logo" />
                    </div>
                </div>
            
                <div className={`${styles.icons} ${menuOpen ? styles.hidden : ""}`}>
                    <Image src={search_icon} alt="search icon" />
                    <Image src={person_icon} alt="person icon" />
                    <Image src={shopping_bag_icon} alt="shopping bag icon" />
                </div>
            </nav>

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