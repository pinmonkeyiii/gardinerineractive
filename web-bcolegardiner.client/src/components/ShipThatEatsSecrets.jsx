import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

export default function ShipThatEatsSecrets() {
    const themes = ["A cursed luxury cruise ship", "Missing memories and manufactured joy", "A determined young journalist", "Secrets that refuse to stay buried", "Psychological horror and mystery", "Trust, identity, and the cost of truth"];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Book",
        name: "The Ship That Eats Secrets",
        author: { "@type": "Person", name: "B. Cole Gardiner" },
        bookFormat: "https://schema.org/EBook",
        genre: ["Young adult horror", "Mystery", "Psychological thriller"],
        description: "An upcoming young adult horror mystery by B. Cole Gardiner about a student journalist investigating the Ecstasy Queen, a luxury cruise ship that steals secrets and reshapes memory.",
        url: "https://gardinerinteractive.com/books/the-ship-that-eats-secrets",
        creativeWorkStatus: "InProgress",
    };

    return (
        <>
            <Seo
                title="The Ship That Eats Secrets"
                description="Meet The Ship That Eats Secrets, an upcoming YA horror mystery by B. Cole Gardiner set aboard the Ecstasy Queen, where memory is currency and every passenger is hiding something."
                path="/books/the-ship-that-eats-secrets"
                type="book"
                jsonLd={jsonLd}
            />

            <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:py-28">
                <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_70%_30%,#0e7490_0,transparent_38%),linear-gradient(to_bottom,#020617,#0f172a)]" />
                <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">Novel in progress</p>
                        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">The Ship That Eats Secrets</h1>
                        <p className="mt-6 max-w-2xl text-2xl font-semibold text-cyan-100">Welcome aboard. The Queen already knows what you came to forget.</p>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                            Student journalist Maya boards the legendary <em>Ecstasy Queen</em> chasing the story that could change her life. The ship promises freedom, joy, and reinvention—but its passengers smile too easily, its corridors remember too much, and the truth keeps changing depending on who tells it.
                        </p>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                            To escape with her identity intact, Maya must uncover what the Queen takes from its guests, who is helping it feed, and why some secrets are dangerous enough to swallow whole.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href="#about" className="rounded-lg bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 hover:bg-cyan-200">Explore the Story</a>
                            <Link to="/contact" className="rounded-lg border border-white/25 px-6 py-3 text-center text-sm font-bold hover:bg-white/10">Follow the Journey</Link>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-sm rounded-t-[10rem] border border-cyan-200/20 bg-gradient-to-b from-cyan-950 to-slate-950 px-7 pb-8 pt-20 shadow-2xl">
                        <div className="border-y border-cyan-100/20 py-8 text-center">
                            <div className="text-6xl" aria-hidden="true">◉</div>
                            <p className="mt-6 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">Ecstasy Queen</p>
                            <p className="mt-3 text-3xl font-black leading-tight">Choose joy.<br />Surrender nothing.</p>
                        </div>
                        <p className="mt-8 text-center text-sm italic text-slate-400">Some voyages take you somewhere new. This one takes something back.</p>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-white px-4 py-16 text-slate-900">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">About the novel</p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A mystery about the stories we tell to keep our names.</h2>
                            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
                                <p>
                                    Maya has always believed the right story can expose a lie. When rumors surrounding the <em>Ecstasy Queen</em> offer her a chance to prove herself, she follows the mystery from Florida to the ship’s gleaming decks.
                                </p>
                                <p>
                                    What begins as an investigation becomes a struggle against a place that edits memory, turns desire into leverage, and offers every passenger a more comfortable version of the truth.
                                </p>
                                <p>
                                    Blending maritime gothic atmosphere, psychological horror, and a conspiracy mystery, <em>The Ship That Eats Secrets</em> asks what remains of us when someone else controls the story.
                                </p>
                            </div>
                        </div>
                        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                            <h3 className="text-xl font-bold">Project details</h3>
                            <dl className="mt-5 space-y-4">
                                {[ ["Author", "B. Cole Gardiner"], ["Genre", "YA horror mystery"], ["Setting", "Aboard the Ecstasy Queen"], ["Status", "Manuscript in development"], ["For readers of", "Atmospheric mysteries, psychological horror, and speculative thrillers"] ].map(([label, value]) => (
                                    <div key={label} className="border-b border-slate-200 pb-3 last:border-0">
                                        <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</dt>
                                        <dd className="mt-1 font-medium">{value}</dd>
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
                        {themes.map((theme) => <div key={theme} className="rounded-xl border border-slate-200 bg-white p-5 font-bold shadow-sm">{theme}</div>)}
                    </div>
                </div>
            </section>

            <section className="bg-cyan-950 px-4 py-16 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Behind the scenes</p>
                    <h2 className="mt-3 text-3xl font-bold">Follow the book as it takes shape</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-cyan-50/80">Updates, favorite lines, revision notes, and eventual publication news will be shared through B. Cole Gardiner’s author channels and website.</p>
                    <Link to="/contact" className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-bold text-cyan-950 hover:bg-cyan-50">Connect with the Author</Link>
                </div>
            </section>
        </>
    );
}
