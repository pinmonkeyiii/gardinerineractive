import React from "react";
import authorPhoto from "../assets/author-photo.png";
import Newsletter from "./Newsletter";

export default function Home() {
    return (
        <section className="px-4 py-12 sm:py-16">
            <div className="mx-auto max-w-5xl">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Left: text */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Crafting Code by Day, Worlds by Night.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg lg:mx-0">
                            Software Development Manager & Aspiring Author of YA Fiction and Horror
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
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

                    {/* Right: photo + newsletter card */}
                    <div className="flex flex-col items-center">
                        <img
                            src={authorPhoto}
                            alt="Author"
                            className="h-48 w-48 rounded-full object-cover shadow-sm"
                        />

                        <div className="mt-8 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <Newsletter />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}