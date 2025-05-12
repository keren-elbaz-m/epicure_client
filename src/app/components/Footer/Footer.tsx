'use client'
import { navbarFooterLinks } from "@/app/data/link";
import { useScreenType } from "@/app/hooks/useScreenType";
import { screenType } from "@/app/types";
import Link from "next/link";
import styles from "@/app/components/Footer/Footer.module.scss";

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