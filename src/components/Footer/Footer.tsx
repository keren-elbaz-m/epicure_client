'use client'
import { navbarFooterLinks } from "@/data/link";
import { useScreenType } from "@/hooks/useScreenType";
import { screenType } from "@/types";
import Link from "next/link";
import styles from "@/components/Footer/Footer.module.scss";

export default function Footer() {
  const screen = useScreenType();
  const isMobile = screen === screenType.MOBILE;

  return (
    <footer className={isMobile ? styles.footerMobileContainer : styles.footerDesktopContainer}>
        <div className={isMobile ? styles.linksWrapperMobile : styles.linksWrapperDesktop}>
          <div className={styles.footerLinks}>
            {navbarFooterLinks.map((link)=>(
              <div key={link.path} className={styles.footerLink}>
                <Link href={link.path}>{link.label}</Link>
              </div>
            ))}
          </div>
        </div>
    </footer>
  );
}