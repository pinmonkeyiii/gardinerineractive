import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bookCover from "/heart-of-the-loom-cover.png";
import authorPhoto from "/author-photo.png";

const buyLinks = [
    { label: "Amazon", href: "https://www.amazon.com/Heart-Loom-Circuit-Threads-Elseron/dp/B0GXX2M4YS/ref=sr_1_1?crid=5ZK96CEX16E9&dib=eyJ2IjoiMSJ9.5-iGv8h1Gtc7FvklW2ZGWA.dd1e6OyTlmQxJrNmtQsLeknFv-AdCl-s_X81Y0J4rds&dib_tag=se&keywords=The+Heart+of+the+Loom+The+Shadow+Circuit+Rises+B.+Cole+Gardiner&nsdOptOutParam=true&qid=1780239336&sprefix=the+heart+of+the+loom+the+shadow+circuit+rises+b.+cole+gardiner+%2Caps%2C128&sr=8-1" },
    { label: "Barnes & Noble", href: "https://www.barnesandnoble.com/w/?ean=9798896757733" },
    { label: "Apple Books", href: "https://itunes.apple.com/us/book/isbn9798896757740" },
    { label: "Google Play Books", href: "https://play.google.com/store/search?q=9798896757740&c=books" },
    { label: "ReaderHouse", href: "https://readerhouse.com/product/the-heart-of-the-loom/" },
];

const themes = [
    "Young adult fantasy adventure",
    "Magic meets technology",
    "Coding, spellcraft, and mystery",
    "Found family and friendship",
    "Ancient memory and futuristic threats",
    "First book in Threads of Elseron",
];

const details = [
    ["Series", "Threads of Elseron"],
    ["Title", "The Heart of the Loom"],
    ["Subtitle", "The Shadow Circuit Rises"],
    ["Author", "B. Cole Gardiner"],
    ["Publisher", "Fulton Books"],
    ["Edition", "First Edition"],
    ["Paperback ISBN", "979-8-89675-773-3"],
    ["Digital ISBN", "979-8-89675-774-0"],
    ["Formats", "Paperback and ebook"],
];

function setMeta(name, content) {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

function setPropertyMeta(property, content) {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

export default function HeartOfTheLoom() {
    useEffect(() => {
        const title = "The Heart of the Loom | Threads of Elseron | B. Cole Gardiner";
        const description = "Discover The Heart of the Loom: The Shadow Circuit Rises, the first Threads of Elseron novel by B. Cole Gardiner. Available in paperback and ebook.";
        document.title = title;
        setMeta("description", description);
        setPropertyMeta("og:title", title);
        setPropertyMeta("og:description", description);
        setPropertyMeta("og:type", "book");
        setPropertyMeta("og:url", "https://gardinerinteractive.com/heart-of-the-loom");
        setPropertyMeta("og:image", "https://gardinerinteractive.com/heart-of-the-loom-cover.png");

        const schema = document.createElement("script");
        schema.type = "application/ld+json";
        schema.id = "heart-of-the-loom-schema";
        schema.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "The Heart of the Loom: The Shadow Circuit Rises",
            alternateName: "Threads of Elseron: The Heart of the Loom",
            author: { "@type": "Person", name: "B. Cole Gardiner" },
            publisher: { "@type": "Organization", name: "Fulton Books" },
            bookEdition: "First Edition",
            inLanguage: "en",
            isbn: ["979-8-89675-773-3", "979-8-89675-774-0"],
            url: "https://gardinerinteractive.com/heart-of-the-loom",
            image: "https://gardinerinteractive.com/heart-of-the-loom-cover.png",
            genre: ["Young Adult Fantasy", "Fantasy Adventure", "Science Fantasy"],
            offers: buyLinks.map((link) => ({
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                url: link.href,
                seller: { "@type": "Organization", name: link.label },
            })),
        });
        document.head.appendChild(schema);

        return () => {
            document.getElementById("heart-of-the-loom-schema")?.remove();
        };
    }, []);

    return (
        <div className="bg-slate-950 text-white">
            <section className="relative overflow-hidden px-4 py-16 sm:py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_34%)]" />
                <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
                    <div className="mx-auto max-w-sm">
                        <img
                            src={bookCover}
                            alt="The Heart of the Loom book cover"
                            className="w-full rounded-2xl border border-white/15 shadow-2xl shadow-cyan-950/60"
                            width="900"
                            height="1350"
                            fetchPriority="high"
                        />
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                            Threads of Elseron
                        </p>
                        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                            The Heart of the Loom
                        </h1>
                        <p className="mt-3 text-2xl font-semibold text-slate-200">
                            The Shadow Circuit Rises
                        </p>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                            When sixteen-year-old Lena Rivera discovers a mysterious book hidden inside an impossible curiosity shop, she is drawn into Elseron: a secret world where spellcraft and circuitry are woven together by an ancient force known as the Loom.
                        </p>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                            As the Shadow Code begins to corrupt both magic and technology, Lena must learn to unite coding, courage, and memory before reality itself is rewritten.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <a
                                href={buyLinks[0].href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
                            >
                                Buy on Amazon
                            </a>
                            <a
                                href="#buy"
                                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                            >
                                See All Retailers
                            </a>
                            <a
                                href="https://www.pr.com/press-release/971240"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                            >
                                Read the Press Release
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white px-4 py-16 text-slate-900">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                                About the book
                            </p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                A fantasy adventure where magic and code share the same heartbeat.
                            </h2>
                            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-700">
                                <p>
                                    Lena Rivera has always understood circuits, patterns, and code better than the social world around her. But when a strange book awakens in her hands, she discovers a hidden realm built from memory, spellwork, and living technology.
                                </p>
                                <p>
                                    Guided by the Guardians of Elseron, Lena must master the six threads of magic: light, sound, motion, memory, form, and connection. Her gift is not only casting spells, but translating them into something new.
                                </p>
                                <p>
                                    With the Shadow Code spreading through the Loom and threatening to erase the past, Lena has to decide what she is willing to fight for, what she is willing to remember, and whether one girl can become the bridge between two worlds.
                                </p>
                            </div>
                        </div>

                        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900">Book details</h3>
                            <dl className="mt-5 space-y-4">
                                {details.map(([label, value]) => (
                                    <div key={label} className="border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                                        <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</dt>
                                        <dd className="mt-1 text-sm font-medium text-slate-900">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="bg-slate-100 px-4 py-16 text-slate-900">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold tracking-tight">What readers can expect</h2>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {themes.map((theme) => (
                            <div key={theme} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                                <div className="text-2xl" aria-hidden="true">✦</div>
                                <h3 className="mt-3 text-lg font-bold text-slate-900">{theme}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="buy" className="bg-white px-4 py-16 text-slate-900">
                <div className="mx-auto max-w-6xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                        Available now
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Buy The Heart of the Loom
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-700">
                        Available in print and digital formats through major online booksellers.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {buyLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50 hover:shadow-md"
                            >
                                {link.label}
                                <span className="mt-2 block text-sm font-medium text-cyan-700">Shop now</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 px-4 py-16 text-white">
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[180px_1fr] md:items-center">
                    <img
                        src={authorPhoto}
                        alt="B. Cole Gardiner"
                        className="h-44 w-44 rounded-full border border-white/15 object-cover shadow-xl"
                        width="176"
                        height="176"
                    />
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Meet the author</p>
                        <h2 className="mt-3 text-3xl font-bold">B. Cole Gardiner</h2>
                        <p className="mt-4 text-lg leading-8 text-slate-300">
                            B. Cole Gardiner is a software development manager by day and a storyteller by night. His writing explores the intersection of fantasy, mystery, memory, identity, and technology.
                        </p>
                        <div className="mt-6">
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                            >
                                More About Cole
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
