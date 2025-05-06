'use client'

import { useScreenType } from "@/app/hooks/useScreenType";
import DesktopNavbar from "@/app/components/navbar/NavbarDesktop";

import MobileNavbar from "@/app/components/navbar/NavbarMobile";


export default function Navbar() {
    const screenType = useScreenType();

    return screenType === "desktop" ? <DesktopNavbar /> : <MobileNavbar />;

}