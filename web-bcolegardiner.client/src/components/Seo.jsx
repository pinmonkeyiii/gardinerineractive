import { useEffect } from "react";

const SITE_NAME = "Gardiner Interactive";
const SITE_URL = "https://gardinerinteractive.com";

function setMeta(name, content, attribute = "name") {
    let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

export default function Seo({
    title,
    description,
    path = "/",
    type = "website",
    image = "/favicon-512.png",
    jsonLd,
}) {
    useEffect(() => {
        const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
        const canonicalUrl = `${SITE_URL}${path}`;
        const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

        document.title = fullTitle;
        setMeta("description", description);
        setMeta("og:title", fullTitle, "property");
        setMeta("og:description", description, "property");
        setMeta("og:type", type, "property");
        setMeta("og:url", canonicalUrl, "property");
        setMeta("og:image", imageUrl, "property");
        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", fullTitle);
        setMeta("twitter:description", description);
        setMeta("twitter:image", imageUrl);

        let canonical = document.head.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", canonicalUrl);

        const scriptId = "page-json-ld";
        document.getElementById(scriptId)?.remove();
        if (jsonLd) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.type = "application/ld+json";
            script.text = JSON.stringify(jsonLd);
            document.head.appendChild(script);
        }

        return () => document.getElementById(scriptId)?.remove();
    }, [title, description, path, type, image, jsonLd]);

    return null;
}
