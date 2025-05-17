import { useState, useEffect } from "react";

export default function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkScreen();

        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return isDesktop;
}