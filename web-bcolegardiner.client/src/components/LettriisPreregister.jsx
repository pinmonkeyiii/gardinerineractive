import React from "react";
import PageContainer from "./PageContainer";

const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.gardinerinteractive.lettriis&utm_source=website&utm_campaign=launch";

function DownloadButton({ children = "Download on Google Play", className = "" }) {
    return (
        <a
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300 sm:w-auto ${className}`}
            aria-label="Download Lettriis on Google Play"
        >
            {children}
        </a>
    );
}

function SectionCard({ icon, title, children }) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                {icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-950">{title}</h3>
            <p className="text-sm leading-6 text-slate-600">{children}</p>
        </div>
    );
}

export default function LettriisPreregister() {
    return (
        <PageContainer className="px-0 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl overflow-hidden py-8 sm:py-12">
                <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-white shadow-2xl sm:px-10 lg:px-14 lg:py-16">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
                    <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur">
                                Now available on Android
                            </div>

                            <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                                Spell words. Clear tiles. Survive the fall.
                            </h1>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                                Lettriis is a fast word puzzle game that blends falling-block strategy with quick vocabulary thinking. Build words, trigger clears, use helpers, and chase one more level.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                                <DownloadButton>Download Free on Google Play</DownloadButton>
                                <a
                                    href="#how-it-plays"
                                    className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10 sm:w-auto"
                                >
                                    See how it plays
                                </a>
                            </div>

                            <p className="mt-4 text-sm text-slate-400">
                                Free to play. Built by Gardiner Interactive.
                            </p>
                        </div>

                        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                            <div className="rounded-[1.5rem] bg-slate-900 p-5">
                                <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                                    <span>Lettriis</span>
                                    <span>Level 5</span>
                                </div>

                                <div className="grid grid-cols-6 gap-2">
                                    {[
                                        "L", "E", "T", "T", "R", "I",
                                        "S", "A", "M", "E", "S", "T",
                                        "W", "O", "R", "D", "S", "Q",
                                        "P", "L", "A", "Y", "E", "R",
                                        "B", "O", "O", "S", "T", "S",
                                        "C", "L", "E", "A", "R", "!",
                                    ].map((letter, index) => (
                                        <div
                                            key={`${letter}-${index}`}
                                            className={`flex aspect-square items-center justify-center rounded-xl text-lg font-black shadow ${index >= 30 ? "bg-emerald-400 text-slate-950" : "bg-white text-slate-950"}`}
                                        >
                                            {letter}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 rounded-2xl bg-emerald-400/15 p-4 text-center">
                                    <p className="text-sm font-semibold text-emerald-200">WORD CLEAR</p>
                                    <p className="text-3xl font-black text-white">+1,250</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="how-it-plays" className="grid gap-5 py-12 md:grid-cols-3">
                    <SectionCard icon="🔤" title="Build words under pressure">
                        Falling letters keep the board moving while you search for the best word before space runs out.
                    </SectionCard>
                    <SectionCard icon="⚡" title="Chase satisfying clears">
                        Complete words to clear tiles, score points, trigger effects, and recover from close calls.
                    </SectionCard>
                    <SectionCard icon="🧠" title="Use strategy, not just speed">
                        Helpers, holds, previews, and quiz moments add tactical choices to every run.
                    </SectionCard>
                </section>

                <section className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm sm:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Launch special</p>
                    <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                        Ready to try Lettriis?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-700">
                        Download the Android version from Google Play and see how long you can keep the words alive.
                    </p>
                    <div className="mt-7">
                        <DownloadButton>Play Lettriis Now</DownloadButton>
                    </div>
                </section>

                <section className="grid gap-6 py-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Why players should try it</p>
                        <h2 className="mt-3 text-3xl font-black text-slate-950">A word game with arcade energy.</h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            "Fast rounds that are easy to replay",
                            "A fresh mix of word search and falling-block gameplay",
                            "Rewarding clears, boosts, level-ups, and clutch saves",
                            "Made for quick mobile sessions and one-more-run momentum",
                        ].map((item) => (
                            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <p className="font-semibold text-slate-800">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="rounded-[2rem] bg-slate-950 p-6 text-white sm:p-10">
                    <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
                        <div>
                            <h2 className="text-3xl font-black">Download Lettriis today</h2>
                            <p className="mt-3 max-w-2xl text-slate-300">
                                Perfect for launch posts, TikTok traffic, and anyone who wants to jump straight from your site into Google Play.
                            </p>
                        </div>
                        <DownloadButton className="shadow-none">Get it on Google Play</DownloadButton>
                    </div>
                </section>

                <section className="px-2 py-8 text-center text-sm text-slate-500">
                    <p>
                        Questions or feedback? Contact <a href="mailto:gardiner.brandonc@gmail.com" className="font-semibold text-slate-700 underline">gardiner.brandonc@gmail.com</a>.
                    </p>
                </section>
            </div>
        </PageContainer>
    );
}
