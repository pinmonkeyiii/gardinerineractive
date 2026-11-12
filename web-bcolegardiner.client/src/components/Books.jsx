import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";
import Newsletter from "./Newsletter";

export default function Books() {
    return (
        <>
            <Seo title="Books by B. Cole Gardiner" description="Explore fantasy and horror novels by B. Cole Gardiner, including The Heart of the Loom and The Ship That Eats Secrets." path="/books" />
            <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Books by B. Cole Gardiner</p>
                <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">Stories worth getting lost in.</h1>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">Explore fantasy, mystery, and horror worlds where memories and secrets change everything.</p>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <img src="/heart-of-the-loom-cover.png" alt="The Heart of the Loom cover" className="h-64 max-w-full rounded-lg object-contain" loading="lazy" />
                        <p className="mt-5 text-sm font-bold uppercase tracking-wide text-cyan-700">Published · Threads of Elseron, Book One</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-950">The Heart of the Loom</h2>
                        <p className="mt-3 text-slate-700">A YA fantasy adventure where magic, technology, and memory collide.</p>
                        <Link to="/heart-of-the-loom" className="mt-5 inline-flex font-bold text-cyan-800 hover:text-cyan-600">Explore the book →</Link>
                    </article>
                    <article className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-sm">
                        <div className="flex h-64 items-center justify-center rounded-xl border border-cyan-300/20 bg-gradient-to-b from-cyan-950 to-slate-950 px-6 text-center">
                            <span className="text-3xl font-black">The Ship That Eats Secrets</span>
                        </div>
                        <p className="mt-5 text-sm font-bold uppercase tracking-wide text-cyan-300">Novel in progress · YA horror mystery</p>
                        <h2 className="mt-2 text-2xl font-bold">The Ship That Eats Secrets</h2>
                        <p className="mt-3 text-slate-300">A student journalist investigates a luxury cruise ship that steals secrets and reshapes memory.</p>
                        <Link to="/books/the-ship-that-eats-secrets" className="mt-5 inline-flex font-bold text-cyan-300 hover:text-cyan-200">Enter the mystery →</Link>
                    </article>
                </div>
                <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><Newsletter context="books" /></div>
            </section>
        </>
    );
}
