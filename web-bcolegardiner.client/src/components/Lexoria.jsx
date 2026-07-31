import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

const playUrl = "https://play.google.com/store/apps/details?id=com.gardinerinteractive.spellfall";

export default function Lexoria() {
    const features = [
        ["Build words. Cast spells.", "Connect letters on the board to create attacks, trigger magical effects, and survive each encounter."],
        ["Choose your path", "Move through a branching dungeon filled with battles, elites, shops, events, and bosses."],
        ["Shape every run", "Discover relics, potions, helpers, and class-based strategies that make each descent play differently."],
        ["Master the risk", "Longer words can deliver stronger results, but every turn gives your enemies another chance to strike."],
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: "Lexoria",
        description: "A word-building roguelite mobile game where players create words to cast spells, defeat enemies, and descend through a dangerous dungeon.",
        genre: ["Word game", "Roguelite", "Role-playing game"],
        gamePlatform: "Android",
        operatingSystem: "Android",
        author: { "@type": "Person", name: "B. Cole Gardiner" },
        publisher: { "@type": "Organization", name: "Gardiner Interactive" },
        url: "https://gardinerinteractive.com/lexoria",
    };

    return (
        <>
            <Seo
                title="Lexoria Word Roguelite Game"
                description="Discover Lexoria, an Android word roguelite where every word becomes a spell. Battle monsters, collect relics, choose a class, and descend through a changing dungeon."
                path="/lexoria"
                jsonLd={jsonLd}
            />

            <section className="overflow-hidden bg-slate-950 px-4 py-16 text-white sm:py-24">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.28em] text-violet-300">Android word roguelite</p>
                        <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">Lexoria</h1>
                        <p className="mt-5 max-w-2xl text-2xl font-semibold text-violet-100">Every word is a weapon.</p>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                            Enter a dungeon where vocabulary is magic. Build words from a shifting board, turn them into spells, and fight your way through enemies, events, shops, elites, and bosses. Choose your class, collect powerful relics, and create a new strategy every run.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href={playUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-violet-300 px-6 py-3 text-center text-sm font-bold text-slate-950 hover:bg-violet-200">
                                Join the Android Test
                            </a>
                            <a href="#gameplay" className="rounded-lg border border-white/25 px-6 py-3 text-center text-sm font-bold text-white hover:bg-white/10">
                                See How It Plays
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-slate-400">Currently in closed testing on Google Play.</p>
                    </div>

                    <div className="relative mx-auto aspect-[4/5] w-full max-w-md rounded-[2rem] border border-violet-300/25 bg-gradient-to-b from-violet-950 via-slate-900 to-slate-950 p-7 shadow-2xl shadow-violet-950/40">
                        <div className="absolute inset-5 rounded-[1.5rem] border border-white/10" />
                        <div className="relative flex h-full flex-col justify-between">
                            <div className="text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.35em] text-violet-300">Gardiner Interactive</p>
                                <div className="mt-7 text-5xl font-black tracking-tight">LEXORIA</div>
                                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-300">Words become magic</p>
                            </div>
                            <div className="grid grid-cols-4 gap-2" aria-label="Stylized Lexoria letter board">
                                {"SPELLWORDMAGICQUEST".split("").map((letter, index) => (
                                    <div key={`${letter}-${index}`} className="flex aspect-square items-center justify-center rounded-lg border border-violet-300/20 bg-white/10 text-xl font-black shadow-inner">
                                        {letter}
                                    </div>
                                ))}
                            </div>
                            <div className="text-center text-sm text-violet-200">Build • Battle • Descend</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gameplay" className="bg-white px-4 py-16 text-slate-900">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-violet-700">How it plays</p>
                    <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">A word game with the escalating choices of a dungeon-crawling roguelite.</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {features.map(([title, description]) => (
                            <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                <h3 className="text-xl font-bold">{title}</h3>
                                <p className="mt-3 leading-7 text-slate-700">{description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-violet-50 px-4 py-16 text-slate-900">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl font-bold">Help shape Lexoria</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-700">
                        Testing feedback helps improve balance, clarity, pacing, and stability before the full release. Android players can join the test through Google Play and share feedback directly with Gardiner Interactive.
                    </p>
                    <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                        <a href={playUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-slate-950 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800">Open Google Play</a>
                        <Link to="/lexoria/support" className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold hover:bg-slate-50">Lexoria Support</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
