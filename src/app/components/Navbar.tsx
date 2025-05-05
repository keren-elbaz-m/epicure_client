'use client'

import { useState } from "react";

import Link from "next/link";
import hamburger from "@/app/images/hamburger.svg";
import epicure_logo from "@/app/images/epicure_logo.jpg";
import person_icon from "@/app/images/person_icon.svg";
import search_icon from "@/app/images/search_icon.svg";
import shopping_bag_icon from "@/app/images/shopping_bag_icon.svg";
import close_icon from "@/app/images/close_icon.svg";
import Image from "next/image";
import styles from "@/app/components/Navbar.module.scss";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className={styles.navbar}>
            <button onClick={() => setMenuOpen(!menuOpen)} className={styles.hamburger}>
                {menuOpen 
                    ? <Image src={close_icon} alt="close icon" />
                    : <Image src={hamburger} alt="hamburger" />
                }
            </button>
                <div className={styles.logo}>
                    <Image src={epicure_logo} alt="epicure logo" />
                </div>
                <div className={styles.icons}>
                <Image src={search_icon} alt="search icon" />
                <Image src={person_icon} alt="person icon" />
                <Image src={shopping_bag_icon} alt="shopping bag icon" />
                </div>
                
            </nav>

            {menuOpen && (
                <div className={styles.menu}>

              <ul>
                <li><Link href="/restaurants">Restaurants</Link></li>
                <li><Link href="/chefs">Chefs</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/terms">Term of Use</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                </ul>

            </div>
              
            )}
        </>
    );
  }