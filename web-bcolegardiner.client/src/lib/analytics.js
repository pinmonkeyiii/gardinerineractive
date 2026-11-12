export const GA_MEASUREMENT_ID = "G-KJWFHN7GDH";

function gtag(...args) {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
        return;
    }

    window.gtag(...args);
}

export function trackPageView(path) {
    gtag("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
    });
}

export function trackKickstarterClick(placement) {
    gtag("event", "kickstarter_click", {
        link_url: "https://www.kickstarter.com/projects/gardinerinteractive/naughty-list",
        link_text: "Follow Naughty List on Kickstarter",
        placement,
        game: "Naughty List",
    });
}

// Record only successful, newly created newsletter subscriptions.
export function trackNewsletterSignup(placement) {
    gtag("event", "generate_lead", {
        lead_source: "newsletter",
        placement,
    });
}

// This measures intent to visit a store, not a confirmed installation.
export function trackGameStoreClick(game, placement, linkUrl) {
    gtag("event", "game_store_click", {
        game,
        store: "Google Play",
        placement,
        link_url: linkUrl,
    });
}
