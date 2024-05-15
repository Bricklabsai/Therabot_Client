import { useEffect, useState } from "react";
export function useScreenSize() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        let mobile = window.innerWidth < 768;
        setIsMobile(mobile);
    }, [])

    return { isMobile }
}