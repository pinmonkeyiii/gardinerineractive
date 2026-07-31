import React from "react";
import { Link } from "react-router-dom";
import siteIcon from "/Icon.png";
import bookCover from "/heart-of-the-loom-cover.png";
import Newsletter from "./Newsletter";
import Seo from "./Seo";

export default function Home() {
    return (
        <>
            <Seo
                title="Author and Indie Game Developer"
                description="Official site of B. Cole Gardiner, author of The Heart of the Loom and The Ship That Eats Secrets, and creator of the word games Lettriis and Lexoria."
                path="/"
            />
            <section className="px-4 py-12 sm:py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col items-center text-center">
                        <img src={siteIcon} alt="Gardiner Interactive logo" className="h-48 w-48 rounded-full object-cover shadow-sm" width="192" height="192" fetchPriority="high" />
                        <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Crafting code by day, worlds by night.</h1>
                        <p className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">Books, games, and imaginative worlds from author and software developer B. Cole Gardiner.</p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <a href="#games" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Explore the Games</a>
                            <a href="#books" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Explore the Books</a>
                        </div>
                    </div>

                    <section id="games" className="mt-16 scroll-mt-24">
                        <div className="text-center">
                            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Gardiner Interactive Games</p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Words are only the beginning.</h2>
                            <p className="mx-auto mt-3 max-w-2xl text-slate-700">Play the released falling-block word game Lettriis, or help shape the dungeon-crawling word roguelite Lexoria.</p>
                        </div>

                        <div className="mt-8 grid gap-6 lg:grid-cols-2">
                            <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                                <div className="flex h-72 items-center justify-center rounded-xl bg-slate-950 px-6 text-center text-white">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">Available now</p>
                                        <p className="mt-4 text-5xl font-black">LETTRIIS</p>
                                        <p className="mt-2 text-sm text-emerald-200">Spell words. Clear tiles. Survive the fall.</p>
                                        <div className="mx-auto mt-7 grid max-w-xs grid-cols-6 gap-2" aria-hidden="true">
                                            {"LETTRIISWORDS".split("").map((letter, index) => (
                                                <div key={`${letter}-${index}`} className="flex aspect-square items-center justify-center rounded-md bg-white/10 text-sm font-black">{letter}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-emerald-700">Now on Google Play</p>
                                <h3 className="mt-2 text-2xl font-bold">Wordplay with arcade energy.</h3>
                                <p className="mt-2 text-slate-700">Build words from falling letters, clear the board, use tactical helpers, and chase one more level in a fast, replayable puzzle game.</p>
                                <div className="mt-5 flex flex-wrap gap-4">
                                    <Link to="/lettriis" className="font-bold text-emerald-800 hover:text-emerald-600">Play Lettriis →</Link>
                                    <a href="https://play.google.com/store/apps/details?id=com.gardinerinteractive.lettriis" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-700 hover:text-slate-950">Google Play ↗</a>
                                </div>
                            </article>

                            <article className="rounded-2xl border border-violet-200 bg-violet-50 p-6 shadow-sm">
                                <div className="flex h-72 items-center justify-center rounded-xl bg-slate-950 px-6 text-center text-white">
                                    <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Word roguelite</p><p className="mt-4 text-5xl font-black">LEXORIA</p><p className="mt-2 text-sm text-violet-200">Every word is a weapon.</p></div>
                                </div>
                                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-violet-700">Android closed test</p>
                                <h3 className="mt-2 text-2xl font-bold">Build words. Cast spells.</h3>
                                <p className="mt-2 text-slate-700">Battle monsters, collect relics, choose a class, and descend through a changing dungeon where vocabulary becomes magic.</p>
                                <Link to="/lexoria" className="mt-5 inline-flex font-bold text-violet-800 hover:text-violet-600">Discover Lexoria →</Link>
                            </article>
                        </div>
                    </section>

                    <section id="books" className="mt-16 scroll-mt-24">
                        <div className="text-center">
                            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">Books by B. Cole Gardiner</p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Stories of magic, memory, and dangerous secrets.</h2>
                        </div>

                        <div className="mt-8 grid gap-6 lg:grid-cols-2">
                            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex sm:gap-6">
                                <img src={bookCover} alt="The Heart of the Loom book cover" className="mx-auto h-64 rounded-xl border border-slate-200 object-cover shadow-md sm:mx-0" width="900" height="1350" />
                                <div>
                                    <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-cyan-700 sm:mt-0">Available now</p>
                                    <h3 className="mt-2 text-2xl font-bold">The Heart of the Loom</h3>
                                    <p className="mt-2 text-slate-700">A YA fantasy adventure where ancient magic, coding, memory, and the Shadow Code collide.</p>
                                    <Link to="/heart-of-the-loom" className="mt-5 inline-flex font-bold text-cyan-800 hover:text-cyan-600">Explore the book →</Link>
                                </div>
                            </article>

                            <article className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-sm">
                                <div className="flex min-h-64 items-center justify-center rounded-xl border border-cyan-300/20 bg-gradient-to-b from-cyan-950 to-slate-950 px-6 text-center">
                                    <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Novel in progress</p><p className="mt-4 text-3xl font-black leading-tight">The Ship That Eats Secrets</p></div>
                                </div>
                                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-cyan-300">Upcoming YA horror</p>
                                <h3 className="mt-2 text-2xl font-bold">The Queen remembers.</h3>
                                <p className="mt-2 text-slate-300">A student journalist boards a luxury cruise ship that collects secrets, edits memory, and never lets truth leave unchanged.</p>
                                <Link to="/books/the-ship-that-eats-secrets" className="mt-5 inline-flex font-bold text-cyan-300 hover:text-cyan-200">Enter the mystery →</Link>
                            </article>
                        </div>
                    </section>

                    <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><Newsletter /></div>
                </div>
            </section>
        </>
    );
}
