import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../lib/analytics";

export default function Analytics() {
    const location = useLocation();

    useEffect(() => {
        const timer = window.setTimeout(() => {
            trackPageView(`${location.pathname}${location.search}${location.hash}`);
        }, 0);

        return () => window.clearTimeout(timer);
    }, [location.pathname, location.search, location.hash]);

    return null;
}
