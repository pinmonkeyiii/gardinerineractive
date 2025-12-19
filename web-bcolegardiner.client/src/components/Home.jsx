import React from "react";
import siteIcon from "/public/Icon.png";

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
                        fetchpriority="high"
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

                <div className="mt-12 flex justify-center">
                    <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <Newsletter />
                    </div>
                </div>
            </div>
        </section>

    );
}