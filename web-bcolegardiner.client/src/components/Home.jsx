import React from "react";
import siteIcon from "/public/Icon.png";
import bookCover from "/heart-of-the-loom-cover.png";

import Newsletter from "./Newsletter";

export default function Home() {
    return (
        <section className="px-4 py-12 sm:py-16">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col items-center text-center">
                    <img
                        src={siteIcon}
                        alt="Gardiner Interactive"
                        className="h-48 w-48 rounded-full object-cover shadow-sm"
                        width="192"
                        height="192"
                        fetchPriority="high"
                    />

                    <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Crafting Code by Day, Worlds by Night.
                    </h2>

                    <p className="mt-4 max-w-2xl text-base text-slate-700 sm:text-lg">
                        Software Development Manager & Aspiring Author of YA Fiction and Horror
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <a
                            href="/portfolio"
                            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                        >
                            View Portfolio
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                        <div className="grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center">
                            <img
                                src={bookCover}
                                alt="The Heart of the Loom book cover"
                                className="mx-auto w-36 rounded-xl border border-slate-200 shadow-md sm:mx-0"
                                width="900"
                                height="1350"
                            />
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
                                    Debut novel available now
                                </p>
                                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                    The Heart of the Loom
                                </h3>
                                <p className="mt-2 text-slate-700">
                                    A Threads of Elseron YA fantasy adventure where ancient magic, coding, memory, and the Shadow Code collide.
                                </p>
                                <a
                                    href="/heart-of-the-loom"
                                    className="mt-4 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                                >
                                    Explore the Book
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <Newsletter />
                    </div>
                </div>
            </div>
        </section>

    );
}