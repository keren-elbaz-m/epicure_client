'use client'

import { useScreenType } from "@/hooks/useScreenType";
import NavbarDesktop from "@/components/Navbar/NavbarDesktop";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import { screenType } from "@/types";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const currentScreenType = useScreenType();
    const pathname = usePathname();

    return currentScreenType === screenType.DESKTOP ? <NavbarDesktop pathname={pathname}/> : <NavbarMobile />;

}
