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
                description="Official site of B. Cole Gardiner, author of The Heart of the Loom and The Ship That Eats Secrets, and creator of the Android word roguelite Lexoria."
                path="/"
            />
            <section className="px-4 py-12 sm:py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col items-center text-center">
                        <img src={siteIcon} alt="Gardiner Interactive logo" className="h-48 w-48 rounded-full object-cover shadow-sm" width="192" height="192" fetchPriority="high" />
                        <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Crafting code by day, worlds by night.</h1>
                        <p className="mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">Books, games, and imaginative worlds from author and software developer B. Cole Gardiner.</p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <Link to="/heart-of-the-loom" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Explore the Books</Link>
                            <Link to="/lexoria" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Discover Lexoria</Link>
                        </div>
                    </div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-3">
                        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <img src={bookCover} alt="The Heart of the Loom book cover" className="mx-auto h-64 rounded-xl border border-slate-200 object-cover shadow-md" width="900" height="1350" />
                            <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-cyan-700">Available now</p>
                            <h2 className="mt-2 text-2xl font-bold">The Heart of the Loom</h2>
                            <p className="mt-2 text-slate-700">A YA fantasy adventure where ancient magic, coding, memory, and the Shadow Code collide.</p>
                            <Link to="/heart-of-the-loom" className="mt-5 inline-flex font-bold text-cyan-800 hover:text-cyan-600">Explore the book →</Link>
                        </article>

                        <article className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-sm">
                            <div className="flex h-64 items-center justify-center rounded-xl border border-cyan-300/20 bg-gradient-to-b from-cyan-950 to-slate-950 px-6 text-center">
                                <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Novel in progress</p><p className="mt-4 text-3xl font-black leading-tight">The Ship That Eats Secrets</p></div>
                            </div>
                            <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-cyan-300">Upcoming YA horror</p>
                            <h2 className="mt-2 text-2xl font-bold">The Queen remembers.</h2>
                            <p className="mt-2 text-slate-300">A student journalist boards a luxury cruise ship that collects secrets, edits memory, and never lets truth leave unchanged.</p>
                            <Link to="/books/the-ship-that-eats-secrets" className="mt-5 inline-flex font-bold text-cyan-300 hover:text-cyan-200">Enter the mystery →</Link>
                        </article>

                        <article className="rounded-2xl border border-violet-200 bg-violet-50 p-6 shadow-sm">
                            <div className="flex h-64 items-center justify-center rounded-xl bg-slate-950 px-6 text-center text-white">
                                <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Word roguelite</p><p className="mt-4 text-5xl font-black">LEXORIA</p><p className="mt-2 text-sm text-violet-200">Every word is a weapon.</p></div>
                            </div>
                            <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-violet-700">Android closed test</p>
                            <h2 className="mt-2 text-2xl font-bold">Build words. Cast spells.</h2>
                            <p className="mt-2 text-slate-700">Battle monsters, collect relics, choose a class, and descend through a changing dungeon.</p>
                            <Link to="/lexoria" className="mt-5 inline-flex font-bold text-violet-800 hover:text-violet-600">Discover the game →</Link>
                        </article>
                    </div>

                    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><Newsletter /></div>
                </div>
            </section>
        </>
    );
}
