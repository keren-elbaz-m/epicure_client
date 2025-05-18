'use client'

import { useScreenType } from "@/hooks/useScreenType";
import NavbarDesktop from "@/components/Navbar/NavbarDesktop";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import { screenType } from "@/types";

export default function Navbar() {
    const currentScreenType = useScreenType();

    return currentScreenType === screenType.DESKTOP ? <NavbarDesktop /> : <NavbarMobile />;

}