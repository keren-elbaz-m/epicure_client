'use client'

import { useScreenType } from "@/app/hooks/useScreenType";
import NavbarDesktop from "@/app/components/navbar/components/Navbar/NavbarDesktop";

import NavbarMobile from "@/app/components/navbar/components/Navbar/NavbarMobile";
import { screenType } from "@/app/types";


export default function Navbar() {
    const currentScreenType = useScreenType();

    return currentScreenType === screenType.DESKTOP ? <NavbarDesktop /> : <NavbarMobile />;

}