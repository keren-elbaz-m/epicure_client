import { useState, useEffect } from "react";

export function useScreenType(screenWidth = 768) {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= screenWidth);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, [screenWidth]);

    return isMobile ? "mobile" : "desktop";
}